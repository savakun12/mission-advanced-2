import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IsLoginState {
  isLogin: boolean;
  setIsLogin: (value: boolean) => void;
}

const useIsLoginStore = create<IsLoginState>()(
  persist(
    (set) => ({
      isLogin: false,
      setIsLogin: (value) => set({ isLogin: value }),
    }),
    {
      name: "isLoginStore",
    },
  ),
);

export default useIsLoginStore;
