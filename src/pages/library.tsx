import { useEffect, useState } from "react";
import { useSettingsStore } from "../lib/zustand/settings-store";
import { useUserStore } from "../lib/zustand/user-store";
import { invoke } from "@tauri-apps/api";
import { PlusIcon } from "../icon/icons";
import ViewChanger from "../components/view-changer";

export default function Library() {
  const [userLibraries, setUserLibraries] = useState<Library[]>([]);
  const setCurrentPage = useUserStore((state) => state.setCurrentPage);
  const userLibrariesFromStore = useSettingsStore(
    (state) => state.userLibraries
  );
  const setUserLibrariesInStore = useSettingsStore(
    (state) => state.setUserLibraries
  );

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

  return (
    <div>
      <div className="font-light pb-4 flex justify-between">
        <div className="p-2">Library</div>
        <div>
          <ViewChanger />
        </div>
      </div>
      <div className="p-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  mx-auto max-w-5xl">
        {userLibraries.length === 0 ? (
          <NewLibraryCard onClick={() => setCurrentPage("settings")} />
        ) : (
          userLibraries.map((library) => (
            <LibraryCard
              library={library}
              onClick={() => setCurrentPage("libraryDetails")}
            />
          ))
        )}
      </div>
    </div>
  );
}

function NewLibraryCard({ onClick }: { onClick: () => void }) {
  return (
    <div onClick={onClick} className="flex flex-col items-center">
      <div className="w-24 h-24 bg-gradient-to-br from-neutral-800 to-neutral-700 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-out flex items-center justify-center cursor-pointer">
        <PlusIcon size={36} className="fill-current  text-neutral-400" />
      </div>
      <div className="pt-2 text-neutral-300 ">Add Library</div>
    </div>
  );
}

function LibraryCard({
  library,
  onClick,
}: {
  library: Library;
  onClick: () => void;
}) {
  return (
    <div onClick={onClick} className="flex flex-col items-center">
      <div className="w-24 h-24 bg-gradient-to-br from-neutral-800 to-neutral-700 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-out flex items-center justify-center cursor-pointer">
        <span className="text-white font-medium"></span>
      </div>
      <div className="pt-2 w-full max-w-[170px] text-neutral-300 text-center break-words">
        {library.directory}
      </div>
    </div>
  );
}
