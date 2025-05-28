import { create } from "zustand";

interface GalaxyState {
  scale: number;
  setScale: (value: number) => void;
}

export const useStore = create<GalaxyState>((set) => ({
  scale: 1,
  setScale: (value) => set({ scale: value }),
}));
