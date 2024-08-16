import { useUserStore } from "../lib/zustand/user-store";
import Album from "../pages/album";
import Artist from "../pages/artist";
import Library from "../pages/library";
import Playlist from "../pages/playlist";
import Settings from "../pages/settings";
import Songs from "../pages/songs";

export default function Display() {
  const currentPage = useUserStore((state) => state.currentPage);

  const renderPage = () => {
    switch (currentPage) {
      case "library":
        return <Library />;
      case "playlist":
        return <Playlist />;
      case "artist":
        return <Artist />;
      case "album":
        return <Album />;
      case "songs":
        return <Songs />;
      case "settings":
        return <Settings />;
      default:
        return <Library />;
    }
  };

  return <div className="p-4 ">{renderPage()}</div>;
}
