import { create } from "zustand";

interface UserState {
  currentPage: string;
  previousPage: string;
  setCurrentPage: (url: string) => void;
}

export const useUserStore = create<UserState>()((set) => ({
  currentPage: "library",
  previousPage: "",
  setCurrentPage: (url) =>
    set((state) => ({
      currentPage: url,
      previousPage: state.currentPage,
    })),
}));
