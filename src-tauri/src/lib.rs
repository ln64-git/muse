use serde::{Deserialize, Serialize};
use surrealdb::Surreal;

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct Library {
    pub directory: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Settings {
    pub user_libraries: Option<Vec<Library>>,
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
