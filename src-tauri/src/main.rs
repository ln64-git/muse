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
    let app_state_guard = state.lock().await;
    let system_db = &app_state_guard.system_db;

    let update_result: Result<Vec<Thing>, Error> =
        system_db.update("settings").content(new_settings).await;

    match update_result {
        Ok(_) => {
            println!("Settings updated successfully");
            Ok(())
        }
        Err(error) => {
            println!("Error updating settings: {:?}", error);
            Err(format!("Database update error: {:?}", error))
        }
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
