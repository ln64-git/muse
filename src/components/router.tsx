import { useUserStore } from "../lib/zustand/user-store";
import Album from "../page/album";
import Artist from "../page/artist";
import Library from "../page/library";
import Playlist from "../page/playlist";
import Settings from "../page/settings";
import Songs from "../page/songs";

export default function Router() {
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

  return <div className="p-4">{renderPage()}</div>;
}
