import { useEffect, useState } from "react";
import { useSettingsStore } from "../lib/zustand/settings-store";
import { useUserStore } from "../lib/zustand/user-store";
import { invoke } from "@tauri-apps/api";
import ViewChanger from "../components/view-changer";
import LibraryListView from "../view/library-list-view";
import LibraryGridView from "../view/library-grid-view";

export default function Library() {
  const [userLibraries, setUserLibraries] = useState<Library[]>([]);
  const setCurrentPage = useUserStore((state) => state.setCurrentPage);
  const userLibrariesFromStore = useSettingsStore(
    (state) => state.userLibraries
  );
  const setUserLibrariesInStore = useSettingsStore(
    (state) => state.setUserLibraries
  );
  const libraryView = useUserStore((state) => state.libraryView); // Get libraryView from Zustand

  async function fetchLibraries() {
    if (userLibrariesFromStore.length > 0) {
      // Zustand store has libraries, set them in local state
      setUserLibraries(userLibrariesFromStore);
    } else {
      // Zustand store is empty, fetch libraries from the database
      try {
        const settingsJson: string = await invoke("fetch_settings");
        const settings: Settings = JSON.parse(settingsJson);
        const libraries = settings.user_libraries || [];
        setUserLibraries(libraries); // Set local state
        setUserLibrariesInStore(libraries); // Update Zustand store
      } catch (error) {
        console.error("Error fetching user settings:", error);
      }
    }
  }

  useEffect(() => {
    fetchLibraries();
  }, []);

  console.log("userLibraries: ", userLibraries);
  console.log("libraryView: ", libraryView);

  return (
    <div>
      <div className="font-light pb-4 flex justify-between">
        <div className="p-2">Library</div>
        <div>
          <ViewChanger />
        </div>
      </div>
      {libraryView === "List" ? (
        <LibraryListView
          userLibraries={userLibraries}
          setCurrentPage={setCurrentPage}
        />
      ) : (
        <LibraryGridView
          userLibraries={userLibraries}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
}
