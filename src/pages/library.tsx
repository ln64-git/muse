export default function Library() {
  return (
    <div>
      <div className="font-light pb-4">Library</div>
      <div className="p-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mx-auto max-w-5xl">
        {Array.from({ length: 24 }, (_, index) => (
          <LibraryCard key={index} />
        ))}
      </div>
    </div>
  );
}

function LibraryCard() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-24 h-24 bg-gradient-to-br from-neutral-800 to-neutral-700  rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-out flex items-center justify-center cursor-pointer">
        <PlusIcon size={36} className="fill-current text-neutral-400" />
      </div>
      <div className="pt-2 text-neutral-300">Add Library</div>
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
