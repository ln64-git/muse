
use serde::{Deserialize, Serialize};
use surrealdb::Surreal;

#[derive(Debug, Serialize, Deserialize)]
pub struct Track {
    pub id: i32,
    pub title: String,
    pub artist: String,
    pub album: String,
    pub genre: String,
    pub duration: i32,
    pub year: i32,
    pub track_number: i32,
    pub album_art_url: Option<String>,
    pub file_path: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Library {
    pub id: i32,
    pub directory: String,
    pub name: Option<String>,
    pub tracks: Option<Vec<Track>>,
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
