import { useSettingsStore } from "../lib/zustand/settings-store";
import { useUserStore } from "../lib/zustand/user-store";

export default function ArtistListView({}: {}) {
  const setCurrentPage = useUserStore((state) => state.setCurrentPage);
  const userLibraries = useSettingsStore((state) => state.userLibraries);
  // TODO Display Artists from userLibraries
  // TODO Render the user's library data and derive Artists

  return (
    <div className="p-2 max-w-5xl mx-auto">
      {userLibraries.map((library) => (
        <div
          key={library.directory}
          className="flex items-center p-2 rounded-lg mb-2 cursor-pointer transition-transform duration-300 ease-out bg-neutral-800 hover:bg-neutral-700"
          onClick={() => setCurrentPage(library.directory)}
        >
          <div className="w-12 h-12 rounded-lg flex items-center justify-center transition-transform duration-300 ease-out bg-gradient-to-br from-neutral-800 to-neutral-700"></div>
          <div className="ml-4 text-neutral-300">{library.directory}</div>
        </div>
      ))}
    </div>
  );
}
