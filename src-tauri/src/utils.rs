use crate::Settings;
use surrealdb::{sql::Thing, Error, Surreal};

pub async fn initialize_user_settings(
    system_db: &Surreal<surrealdb::engine::local::Db>,
) -> Result<(), String> {
    // Check if the single settings document already exists
    let settings_result: Result<Option<Settings>, _> =
        system_db.select(("settings", "single")).await;

    match settings_result {
        Ok(Some(_)) => {
            println!("Settings already initialized.");
        }
        Ok(None) => {
            // If the settings document is missing, insert default settings
            let default_settings = Settings {
                user_libraries: Some(Vec::new()),
            };

            // Specify the correct type for the insert result
            let insert_result: Result<Option<Thing>, Error> = system_db
                .create(("settings", "single"))
                .content(default_settings)
                .await;

            match insert_result {
                Ok(Some(_)) => println!("Initialized default settings in the database."),
                Ok(None) => {
                    return Err("Failed to insert default settings: No record created.".to_string())
                }
                Err(e) => return Err(format!("Failed to insert default settings: {:?}", e)),
            }
        }
        Err(e) => return Err(format!("Failed to fetch settings: {:?}", e)),
    }

    Ok(())
}
