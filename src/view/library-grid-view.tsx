import { PlusIcon } from "../icon/icons";

export default function LibraryGridView({
  userLibraries,
  setCurrentPage,
}: {
  userLibraries: Library[];
  setCurrentPage: (url: string) => void;
}) {
  return (
    <div className="p-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mx-auto max-w-5xl">
      {userLibraries.length === 0 ? (
        <NewLibraryCard onClick={() => setCurrentPage("settings")} />
      ) : (
        userLibraries.map((library) => (
          <LibraryCard
            key={library.directory} // Ensure you use a unique key
            library={library}
            onClick={() => setCurrentPage("libraryDetails")}
          />
        ))
      )}
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
