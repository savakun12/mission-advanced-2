import { create } from "zustand";

interface IsOpenState {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const useIsOpenStore = create<IsOpenState>()((set) => ({
  isOpen: false,
  setIsOpen: (value) => set({ isOpen: value }),
}));

export default useIsOpenStore;
