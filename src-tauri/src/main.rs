// Prevents additional console window from appearing on Windows in release mode. DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use serde::{Deserialize, Serialize};
use tauri::{self};

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[derive(Debug, Serialize, Deserialize)]
struct Settings {
    user_library_paths: Vec<String>,
}

// Function to Initialize SurrealDB Database
fn initialize_surrealdb() -> Result<(), String> {
    // Add code here to initialize the SurrealDB connection
    // This might involve setting up the database URL, credentials, and establishing a connection
    // Return Ok(()) if successful, or an appropriate error message if initialization fails
    Ok(())
}

// Function to Fetch Settings (inside database)
#[tauri::command]
fn fetch_settings() -> Result<Settings, String> {
    // Add code here to query the database for settings
    // This might involve running a query like "SELECT * FROM settings" and deserializing the result into a Settings struct
    // Return the Settings struct or an appropriate error message if the fetch fails
    Ok(Settings {
        user_library_paths: vec!["Library1".to_string()], // Example data
    })
}

// Function to Update Settings (inside database)
#[tauri::command]
fn update_settings(_new_settings: Settings) -> Result<(), String> {
    // Add code here to update the settings in the database
    // This might involve running an "UPDATE settings SET ..." query with the new settings data
    // Return Ok(()) if successful, or an appropriate error message if the update fails
    Ok(())
}

fn main() {
    // Initialize the SurrealDB database at the start of the application
    if let Err(e) = initialize_surrealdb() {
        eprintln!("Failed to initialize the database: {}", e);
        return;
    }

    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            greet,
            fetch_settings,
            update_settings
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
