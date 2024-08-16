import { useEffect, useState } from "react";
import { useSettingsStore } from "../lib/zustand/settings-store";
import { useUserStore } from "../lib/zustand/user-store";
import { invoke } from "@tauri-apps/api";

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
      <div className="font-light pb-4">Library</div>
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

type PlusIconProps = {
  size?: number; // Optional, defaults to 24
  className?: string; // Optional, defaults to empty string
};

function PlusIcon({ size = 24, className = "" }: PlusIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        d="M12 2C12.5523 2 13 2.44772 13 3V11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H13V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V13H3C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11H11V3C11 2.44772 11.44772 2 12 2Z"
        fill="currentColor"
      />
    </svg>
  );
}
