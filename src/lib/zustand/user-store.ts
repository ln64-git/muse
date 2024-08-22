import { create } from "zustand";

interface UserState {
  currentPage: string;
  previousPage: string;
  command: string;
  libraryView: "List" | "Grid";
  setCurrentPage: (url: string) => void;
  runCommand: (command: string) => void;
  setLibraryView: (view: "List" | "Grid") => void;
}

export const useUserStore = create<UserState>((set) => ({
  currentPage: "library",
  previousPage: "",
  command: "",
  libraryView: "List",
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
}));
