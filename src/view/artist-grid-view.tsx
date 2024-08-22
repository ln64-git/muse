import { useUserStore } from "../lib/zustand/user-store";
import { PlusIcon } from "../icon/icons";
import { useSettingsStore } from "../lib/zustand/settings-store";

export default function ArtistGridView({}: {}) {
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
    <div className="p-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mx-auto max-w-5xl">
      {userLibraries.length === 0 ? (
        <NewLibraryCard onClick={() => setCurrentPage("settings")} />
      ) : (
        userLibraries.map((library) => {
          const isSelected = selectedLibraries.some(
            (item) => item.directory === library.directory
          );

          return (
            <LibraryCard
              key={library.directory}
              library={library}
              isSelected={isSelected}
              onClick={() => toggleSelection(library)}
            />
          );
        })
      )}
    </div>
  );
}

export function LibraryCard({
  library,
  isSelected,
  onClick,
}: {
  library: Library;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={`flex flex-col mx-2 items-center p-2 rounded-lg cursor-pointer transition-transform duration-300 ease-out 
      ${isSelected ? " bg-neutral-700 " : "  hover:bg-neutral-700"} 
      shadow-lg`}
    >
      <div className="w-24 h-24 bg-gradient-to-br from-neutral-800 to-neutral-700 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-out flex items-center justify-center">
        <span className="text-white font-medium"></span>
      </div>
      <div className="pt-2 w-full max-w-[170px] text-neutral-300 text-center break-words">
        {library.directory}
      </div>
    </div>
  );
}

export function NewLibraryCard({ onClick }: { onClick: () => void }) {
  return (
    <div onClick={onClick} className="flex flex-col items-center">
      <div className="w-24 h-24 bg-gradient-to-br from-neutral-800 to-neutral-700 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-out flex items-center justify-center cursor-pointer">
        <PlusIcon size={36} className="fill-current text-neutral-400" />
      </div>
      <div className="pt-2 text-neutral-300">Add Library</div>
    </div>
  );
}
