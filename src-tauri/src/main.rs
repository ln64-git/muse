mod utils;

use muse::{AppState, Settings};
use std::sync::Arc;
use surrealdb::sql::Thing;
use surrealdb::Error;
use surrealdb::{
    engine::local::{Mem, RocksDb},
    Surreal,
};
use tauri::{self, api::path::data_dir, State};
use tokio::sync::Mutex;
use utils::initialize_user_settings;

use serde_json;

#[tauri::command]
async fn fetch_settings(state: State<'_, Arc<Mutex<AppState>>>) -> Result<String, String> {
    let app_state_guard = state.lock().await;
    let system_db = &app_state_guard.system_db;

    let system_settings_result: Result<Vec<Settings>, _> = system_db.select("settings").await;

    let setting_entries = match system_settings_result {
        Ok(entries) => entries,
        Err(error) => return Err(format!("Database error: {:?}", error)),
    };

    // Convert the `Settings` object to a JSON string
    serde_json::to_string(&setting_entries).map_err(|e| format!("Serialization error: {}", e))
}

#[tauri::command]
async fn update_settings(
    state: State<'_, Arc<Mutex<AppState>>>,
    new_settings: Settings,
) -> Result<(), String> {
    println!("new_settings: {:#?}", new_settings);
    let app_state_guard = state.lock().await;
    let system_db = &app_state_guard.system_db;

    // Fetch existing settings
    let existing_settings: Result<Vec<Settings>, _> = system_db.select("settings").await;

    let update_result: Result<Vec<Thing>, Error> = match existing_settings {
        Ok(mut settings_list) => {
            if let Some(mut existing_setting) = settings_list.pop() {
                // Update the existing settings with new user_libraries
                existing_setting.user_libraries = new_settings.user_libraries.clone();

                // Perform the update and get a Vec<Thing>
                system_db.update("settings").content(existing_setting).await
            } else {
                // No settings found, insert new settings
                system_db.create("settings").content(new_settings).await
            }
        }
        Err(e) => return Err(format!("Database fetch error: {:?}", e)),
    };

    // Handle the result based on whether the Vec<Thing> is empty or not
    match update_result {
        Ok(things) if !things.is_empty() => Ok(()), // Successfully updated
        Ok(_) => Err("No matching entry found to update.".into()), // Shouldn't happen, but handle gracefully
        Err(e) => Err(format!("Database update error: {:?}", e)),
    }
}

#[tokio::main]
async fn main() {
    let app_state = initialize_application()
        .await
        .expect("Failed to initialize the database");

    let shared_state = Arc::new(Mutex::new(app_state));

    tauri::Builder::default()
        .manage(shared_state)
        .invoke_handler(tauri::generate_handler![fetch_settings, update_settings])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

async fn initialize_application() -> Result<AppState, String> {
    let data_dir = data_dir().unwrap();
    let db_path = data_dir.join("muse");

    let system_db: Surreal<surrealdb::engine::local::Db> =
        Surreal::new::<RocksDb>(db_path.to_str().unwrap())
            .await
            .map_err(|e| e.to_string())?;
    system_db
        .use_ns("user")
        .use_db("muse")
        .await
        .map_err(|e| e.to_string())?;

    initialize_user_settings(&system_db).await?;

    let memory_db = Surreal::new::<Mem>(()).await.map_err(|e| e.to_string())?;
    memory_db
        .use_ns("user")
        .use_db("muse")
        .await
        .map_err(|e| e.to_string())?;

    Ok(AppState {
        system_db,
        memory_db,
    })
}
