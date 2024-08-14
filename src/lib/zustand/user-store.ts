import { create } from "zustand";

interface UserState {
  userLibraries: Library[]; // Array of libraries
  currentPage: string;
  previousPage: string;
  command: string;
  setUserLibraries: (libraries: Library[]) => void;
  setCurrentPage: (url: string) => void;
  runCommand: (command: string) => void;
}

export const useUserStore = create<UserState>()((set) => ({
  userLibraries: [],
  currentPage: "library",
  previousPage: "",
  command: "",
  setUserLibraries: (libraries) =>
    set(() => ({
      userLibraries: libraries,
    })),
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
}));
