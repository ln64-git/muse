import { useSettingsStore } from "../lib/zustand/settings-store";
import { useUserStore } from "../lib/zustand/user-store";
import { NewLibraryCard } from "./library-grid-view";

export default function LibraryListView({}: {}) {
  const userLibraries = useSettingsStore((state) => state.userLibraries);
  const setCurrentPage = useUserStore((state) => state.setCurrentPage);
  const selectedLibraries = useUserStore((state) => state.selectedLibraries);
  const setSelectedLibraries = useUserStore(
    (state) => state.setSelectedLibraries
  );

  const toggleSelection = (library: Library) => {
    setSelectedLibraries((prevSelected) => {
      const isSelected = prevSelected.some(
        (item) => item.directory === library.directory
      );
      return isSelected
        ? prevSelected.filter((item) => item.directory !== library.directory)
        : [...prevSelected, library];
    });
  };

  return (
    <div className="p-2 max-w-5xl mx-auto">
      {userLibraries.length === 0 ? (
        <NewLibraryCard onClick={() => setCurrentPage("settings")} />
      ) : (
        userLibraries.map((library) => {
          const isSelected = selectedLibraries.some(
            (item) => item.directory === library.directory
          );

          return (
            <div
              key={library.directory}
              className={`flex items-center p-2 rounded-lg mb-2 cursor-pointer transition-transform duration-300 ease-out 
              ${
                isSelected
                  ? "bg-neutral-700  "
                  : "bg-neutral-800  hover:bg-neutral-700"
              } 
              shadow-lg`}
              onClick={() => toggleSelection(library)}
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center transition-transform duration-300 ease-out bg-gradient-to-br from-neutral-800 to-neutral-700"></div>
              <div className="ml-4 text-neutral-300">{library.directory}</div>
            </div>
          );
        })
      )}
    </div>
  );
}
