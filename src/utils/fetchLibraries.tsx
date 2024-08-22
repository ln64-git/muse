// src/lib/fetchLibraries.ts
import { invoke } from "@tauri-apps/api";
import { useSettingsStore } from "../lib/zustand/settings-store";

export async function fetchLibraries(): Promise<Library[]> {
  const userLibrariesFromStore = useSettingsStore.getState().userLibraries;
  const setUserLibrariesInStore = useSettingsStore.getState().setUserLibraries;

  if (userLibrariesFromStore.length > 0) {
    // Zustand store has libraries, return them
    return userLibrariesFromStore;
  } else {
    // Zustand store is empty, fetch libraries from the database
    try {
      const settingsJson: string = await invoke("fetch_settings");
      const settings: Settings = JSON.parse(settingsJson);
      const libraries = settings.user_libraries || [];
      setUserLibrariesInStore(libraries); // Update Zustand store
      return libraries;
    } catch (error) {
      console.error("Error fetching user settings:", error);
      throw error; // Rethrow the error for handling in the component
    }
  }
}
