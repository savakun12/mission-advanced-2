import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  userId: string;
  email: string;
  phoneNumber: string;
  avatar: string;
}

interface UserState {
  user: User[];
  setUser: (user: User[]) => void;
}

const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: [],
      setUser: (value) => set({ user: value }),
    }),
    {
      name: "userStore",
    },
  ),
);

export default useUserStore;
