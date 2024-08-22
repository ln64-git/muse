// src/pages/Library.tsx
import { useUserStore } from "../lib/zustand/user-store";
import PageHeader from "../components/page-header";
import LibraryListView from "../view/library-list-view";
import LibraryGridView from "../view/library-grid-view";

export default function LibraryPage() {
  const libraryView = useUserStore((state) => state.libraryView);
  const selectedLibraries = useUserStore((state) => state.selectedLibraries);

  // Determine the selection message
  const selectedCount = selectedLibraries.length;
  let selectionMessage = "No libraries selected";
  if (selectedCount === 1) {
    selectionMessage = "1 library selected";
  } else if (selectedCount > 1) {
    selectionMessage = `${selectedCount} libraries selected`;
  }

  return (
    <div>
      <PageHeader
        name="Library"
        centerText={selectionMessage}
        setView={(view) => useUserStore.getState().setLibraryView(view)}
      />
      {libraryView === "List" ? <LibraryListView /> : <LibraryGridView />}
    </div>
  );
}
