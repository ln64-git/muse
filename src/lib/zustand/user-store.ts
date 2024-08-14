import { create } from "zustand";

interface UserState {
  currentPage: string;
  previousPage: string;
  command: string;
  setCurrentPage: (url: string) => void;
  runCommand: (command: string) => void;
}

export const useUserStore = create<UserState>()((set) => ({
  currentPage: "library",
  previousPage: "",
  command: "",

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
