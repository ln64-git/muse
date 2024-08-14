use std::sync::Arc;

use serde::{Deserialize, Serialize};
use surrealdb::Surreal;
use tauri::Manager;
use tokio::sync::Mutex;

#[derive(Debug, Serialize, Deserialize)]
pub struct Settings {
    pub user_library_paths: Vec<String>,
}

#[derive(Debug)]
pub struct AppState {
    pub system_db: Surreal<surrealdb::engine::local::Db>,
    pub memory_db: Surreal<surrealdb::engine::local::Db>,
}

impl Clone for AppState {
    fn clone(&self) -> Self {
        AppState {
            system_db: self.system_db.clone(),
            memory_db: self.memory_db.clone(),
        }
    }
}

pub async fn access_app_state(app_handle: tauri::AppHandle) -> AppState {
    let shared_state = app_handle.state::<Arc<Mutex<AppState>>>();
    let app_state_guard = shared_state.lock().await;
    app_state_guard.clone()
}
