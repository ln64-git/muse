import { useUserStore } from "../lib/zustand/user-store";

export default function Header() {
  const setCurrentPage = useUserStore((state) => state.setCurrentPage);

  return (
    <>
      <div
        onClick={() => setCurrentPage("library")}
        className="bg-neutral-950 h-[76px] flex items-center"
      >
        <button className="p-2 ml-4 text-xl hover:filter hover:brightness-120  rounded-lg transition-all duration-300 transform hover:scale-110 hover:bg-neutral-900 hover:shadow-lg ">
          Muse
        </button>
      </div>
    </>
  );
}
