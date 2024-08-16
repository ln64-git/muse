import { useUserStore } from "../lib/zustand/user-store";

function PlayerIcon({ src, size }: { src: string; size: number }) {
  const runCommand = useUserStore((state) => state.runCommand);
  const command = src.replace("/player/", "").replace(".svg", "");

  return (
    <div
      onClick={() => runCommand(command)}
      className="min-w-[40px] opacity-100 p-1 m-3 rounded-lg transition-all duration-300 transform hover:scale-110 hover:filter hover:brightness-150 hover:shadow-lg "
    >
      <img src={src} width={size} height={size} alt="Icon" />
    </div>
  );
}

export default function Player() {
  return (
    <div className="bg-neutral-950 rounded-b-lg flex w-full justify-center items-center border-opacity-25  ">
      <div className="flex items-center">
        <PlayerIcon size={40} src="/player/shuffle.svg" />
      </div>
      <div className="flex">
        <PlayerIcon size={45} src="/player/track-back.svg" />
        <PlayerIcon size={45} src="/player/fast-rewind.svg" />
        <PlayerIcon size={45} src="/player/play.svg" />
        <PlayerIcon size={45} src="/player/fast-forward.svg" />
        <PlayerIcon size={45} src="/player/track-next.svg" />
      </div>
      <div className="flex items-center">
        <PlayerIcon size={35} src="/player/repeat.svg" />
      </div>
    </div>
  );
}
