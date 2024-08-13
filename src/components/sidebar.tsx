import Image from "next/image";
import React from "react";

function SidebarIcon({ src }: { src: string }) {
  return (
    <div className="min-w-[40px] text-neutral-400 opacity-70 p-2 m-4 rounded-lg transition-all duration-300 transform hover:scale-110 hover:bg-neutral-800 hover:shadow-lg">
      <Image src={src} width={50} height={50} alt="Icon" />
    </div>
  );
}

export default function Sidebar() {
  return (
    <div className="h-full bg-neutral-950 w-[80px] pt-[75px]">
      <SidebarIcon src="/sidebar/library.svg" />
      <SidebarIcon src="/sidebar/playlist.svg" />
      <SidebarIcon src="/sidebar/artist.svg" />
      <SidebarIcon src="/sidebar/album.svg" />
      <SidebarIcon src="/sidebar/songs.svg" />
    </div>
  );
}
