import { useUserStore } from "../lib/zustand/user-store";

function SidebarIcon({ src }: { src: string }) {
  const setCurrentPage = useUserStore((state) => state.setCurrentPage);
  const currentPage = useUserStore((state) => state.currentPage);
  const page = src.replace("/sidebar/", "").replace(".svg", "");

  const isActive = currentPage === page;

  return (
    <div
      onClick={() => setCurrentPage(page)}
      className={`min-w-[45px] text-neutral-400 p-2 m-3 rounded-lg transition-all duration-300 transform ${
        isActive
          ? "filter brightness-200"
          : "opacity-80 hover:filter hover:brightness-150"
      } hover:scale-110 hover:bg-neutral-900 hover:shadow-lg`}
    >
      <img src={src} width={40} height={40} alt="Icon" />
    </div>
  );
}

export default function Sidebar() {
  return (
    <div className="relative">
      <div className="h-full max-h-full w-[80px] pt-[75px] space-y-4 bg-gradient-to-t bg-neutral-950">
        <SidebarIcon src="/sidebar/library.svg" />
        <SidebarIcon src="/sidebar/playlist.svg" />
        <SidebarIcon src="/sidebar/artist.svg" />
        <SidebarIcon src="/sidebar/album.svg" />
        <SidebarIcon src="/sidebar/songs.svg" />
        <SidebarIcon src="/sidebar/settings.svg" />
      </div>
      <div className="absolute mb-16 left-0 bottom-0 h-[180px] bg-gradient-to-t from-neutral-950 to-transparent pointer-events-none w-full z-10"></div>
      <div className="absolute left-0 bottom-0 h-[80px] bg-gradient-to-t bg-neutral-950 pointer-events-none w-[80px]"></div>
    </div>
  );
}
