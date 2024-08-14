import { create } from "zustand";

interface SettingState {
  userLibraries: Library[];
  setUserLibraries: (libraries: Library[]) => void;
}

export const useSettingStore = create<SettingState>()((set) => ({
  userLibraries: [],
  setUserLibraries: (libraries) =>
    set(() => ({
      userLibraries: libraries,
    })),
}));
