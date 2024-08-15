use crate::Settings;
use surrealdb::sql::Thing;
use surrealdb::{Error, Surreal};

pub async fn initialize_user_settings(
    system_db: &Surreal<surrealdb::engine::local::Db>,
) -> Result<(), String> {
    // Check if settings already exist in the database
    let settings_result = system_db.select::<Vec<Settings>>("settings").await;

    match settings_result {
        Ok(settings) => {
            if settings.is_empty() {
                // If the settings table is empty, insert default settings
                let empty_settings = Settings {
                    user_libraries: Some(Vec::new()),
                };

                // Handle the result as a vector of Things
                let insert_result: Result<Vec<Thing>, Error> =
                    system_db.create("settings").content(empty_settings).await;

                match insert_result {
                    Ok(things) => {
                        if things.is_empty() {
                            return Err(
                                "Failed to insert default settings: No record created.".to_string()
                            );
                        } else {
                            println!("Initialized default settings in the database.");
                        }
                    }
                    Err(e) => return Err(format!("Failed to insert default settings: {:?}", e)),
                }
            } else {
                println!("Settings already initialized.");
            }
        }
        Err(e) => return Err(format!("Failed to fetch settings: {:?}", e)),
    }

    Ok(())
}
