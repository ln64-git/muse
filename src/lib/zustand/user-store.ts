import { create } from "zustand";

interface Library {
  directory: string;
}

interface UserState {
  currentPage: string;
  previousPage: string;
  command: string;
  libraryView: "List" | "Grid";
  selectedLibraries: Library[];
  setCurrentPage: (url: string) => void;
  runCommand: (command: string) => void;
  setLibraryView: (view: "List" | "Grid") => void;
  setSelectedLibraries: (
    libraries: Library[] | ((prev: Library[]) => Library[])
  ) => void;
}

export const useUserStore = create<UserState>((set) => ({
  currentPage: "library",
  previousPage: "",
  command: "",
  libraryView: "List",
  selectedLibraries: [],
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
  setSelectedLibraries: (libraries) =>
    set((state) => ({
      selectedLibraries:
        typeof libraries === "function"
          ? libraries(state.selectedLibraries)
          : libraries,
    })),
}));
