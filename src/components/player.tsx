import Image from "next/image";
import React from "react";

function PlayerIcon({ src }: { src: string }) {
  return (
    <div className="min-w-[40px] opacity-100 p-1 m-3 rounded-lg transition-all duration-300 transform hover:scale-110 hover:bg-neutral-800 hover:shadow-lg  ">
      <Image src={src} width={35} height={35} alt="Icon" />
    </div>
  );
}

export default function Player() {
  return (
    <div className="bg-neutral-950  rounded-b-lg flex w-full justify-center ">
      <PlayerIcon src="/player/track-back.svg" />
      <PlayerIcon src="/player/fast-rewind.svg" />
      <PlayerIcon src="/player/play.svg" />
      <PlayerIcon src="/player/fast-forward.svg" />
      <PlayerIcon src="/player/track-next.svg" />
    </div>
  );
}
