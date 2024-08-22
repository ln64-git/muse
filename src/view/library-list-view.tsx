import { useUserStore } from "../lib/zustand/user-store";
import { PlusIcon } from "../icon/icons";

export default function LibraryListView({
  userLibraries,
  setCurrentPage,
}: {
  userLibraries: Library[];
  setCurrentPage: (url: string) => void;
}) {
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
              <div className="w-16 h-16 rounded-lg flex items-center justify-center transition-transform duration-300 ease-out bg-gradient-to-br from-neutral-800 to-neutral-700">
                {/* You can add content here */}
              </div>
              <div className="ml-4 text-neutral-300">{library.directory}</div>
            </div>
          );
        })
      )}
    </div>
  );
}

function NewLibraryCard({ onClick }: { onClick: () => void }) {
  return (
    <div onClick={onClick} className="flex flex-col items-center">
      <div className="w-24 h-24 bg-gradient-to-br from-neutral-800 to-neutral-700 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-out flex items-center justify-center cursor-pointer">
        <PlusIcon size={36} className="fill-current text-neutral-400" />
      </div>
      <div className="pt-2 text-neutral-300">Add Library</div>
    </div>
  );
}
