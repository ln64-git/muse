import { SearchIcon, VolumeHighIcon } from "../icon/icons";
import { useUserStore } from "../lib/zustand/user-store";

export default function Header() {
  const setCurrentPage = useUserStore((state) => state.setCurrentPage);

  return (
    <div
      onClick={() => setCurrentPage("library")}
      className="bg-neutral-950 h-[76px] flex justify-between items-center px-4"
    >
      <button className="text-xl hover:filter hover:brightness-120 rounded-lg transition-all duration-300 transform hover:scale-110 hover:bg-neutral-900 hover:shadow-lg">
        Muse
      </button>
      <div className="flex">
        <div className=" h-[50px] w-[50px] flex items-center justify-center rounded-lg">
          <SearchIcon className="fill-current  text-neutral-600" size={50} />
        </div>
        <div className=" h-[50px] w-[50px] flex items-center justify-center rounded-lg">
          <VolumeHighIcon
            className="fill-current  text-neutral-600"
            size={30}
          />
        </div>
      </div>
    </div>
  );
}
