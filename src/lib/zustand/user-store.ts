import { create } from "zustand";

interface Library {
  directory: string;
}

interface UserState {
  currentPage: string;
  previousPage: string;
  command: string;
  libraryView: "List" | "Grid";
  artistView: "List" | "Grid";
  selectedLibraries: Library[];
  setCurrentPage: (url: string) => void;
  runCommand: (command: string) => void;
  setLibraryView: (view: "List" | "Grid") => void;
  setArtistView: (view: "List" | "Grid") => void;
  setSelectedLibraries: (
    libraries: Library[] | ((prev: Library[]) => Library[])
  ) => void;
}

export const useUserStore = create<UserState>((set) => ({
  currentPage: "library",
  previousPage: "",
  command: "",
  selectedLibraries: [],
  libraryView: "List",
  artistView: "List",
  setCurrentPage: (url) =>
    set((state) => ({
      currentPage: url,
      previousPage: state.currentPage,
    })),
  runCommand: (command) => {
    set(() => ({
      command,
    }));
    setTimeout(() => {
      set(() => ({
        command: "",
      }));
    }, 1000);
  },
  setLibraryView: (view) =>
    set(() => ({
      libraryView: view,
    })),
  setArtistView: (view) =>
    set(() => ({
      artistView: view,
    })),
  setSelectedLibraries: (libraries) =>
    set((state) => ({
      selectedLibraries:
        typeof libraries === "function"
          ? libraries(state.selectedLibraries)
          : libraries,
    })),
}));
