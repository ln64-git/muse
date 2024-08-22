import { SearchIcon, VolumeHighIcon } from "../icon/icons";
import { useUserStore } from "../lib/zustand/user-store";

export default function Header() {
  const setCurrentPage = useUserStore((state) => state.setCurrentPage);

  return (
    <div
      onClick={() => setCurrentPage("library")}
      className="bg-neutral-950 h-[76px] flex justify-between items-center px-4"
    >
      <button className="text-xl text-neutral-400 p-2 m-3 rounded-lg transition-all duration-300 transform hover:scale-110 hover:bg-neutral-900 hover:shadow-lg hover:brightness-150">
        Muse
      </button>
      <div className="flex">
        <div className="min-w-[45px] h-[50px] w-[50px] flex items-center justify-center p-2  rounded-lg transition-all duration-300 transform hover:scale-110 hover:bg-neutral-900 hover:shadow-lg hover:brightness-150">
          <SearchIcon className="fill-current text-neutral-600" size={25} />
        </div>
        <div className="min-w-[45px] h-[50px] w-[50px] flex items-center justify-center p-2  rounded-lg transition-all duration-300 transform hover:scale-110 hover:bg-neutral-900 hover:shadow-lg hover:brightness-150">
          <VolumeHighIcon className="fill-current text-neutral-600" size={25} />
        </div>
      </div>
    </div>
  );
}
