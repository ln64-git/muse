import { create } from "zustand";

interface SettingsState {
  userLibraries: Library[];
  setUserLibraries: (libraries: Library[]) => void;
}

export const useSettingsStore = create<SettingsState>()((set) => ({
  userLibraries: [],
  setUserLibraries: (libraries) =>
    set(() => ({
      userLibraries: libraries,
    })),
}));
