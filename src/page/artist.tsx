// src/pages/Library.tsx
import { useUserStore } from "../lib/zustand/user-store";
import PageHeader from "../components/page-header";
import ArtistListView from "../view/artist-list-view";
import ArtistGridView from "../view/artist-grid-view";

export default function ArtistPage() {
  const artistView = useUserStore((state) => state.artistView);
  return (
    <div>
      <PageHeader
        name="Artist"
        setView={(view) => useUserStore.getState().setArtistView(view)}
      />
      {artistView === "List" ? <ArtistListView /> : <ArtistGridView />}
    </div>
  );
}
