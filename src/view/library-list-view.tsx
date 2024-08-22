import { PlusIcon } from "../icon/icons";

export default function LibraryListView({
  userLibraries,
  setCurrentPage,
}: {
  userLibraries: Library[];
  setCurrentPage: (url: string) => void;
}) {
  return (
    <div className="p-2 max-w-5xl mx-auto">
      {userLibraries.length === 0 ? (
        <NewLibraryCard onClick={() => setCurrentPage("settings")} />
      ) : (
        userLibraries.map((library) => (
          <div
            key={library.directory}
            className="flex items-center p-2 bg-neutral-800 rounded-lg mb-2 cursor-pointer"
            onClick={() => setCurrentPage("libraryDetails")}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-neutral-800 to-neutral-700 rounded-lg shadow-lg flex items-center justify-center">
              {/* You can add content here */}
            </div>
            <div className="ml-4 text-neutral-300">{library.directory}</div>
          </div>
        ))
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
