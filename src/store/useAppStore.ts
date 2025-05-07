import { User } from "@/types/general.types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface AppStore {
  users: User[];
  addUser: (user: User) => void;
  deleteUser: (id: number) => void;
  setUsers: (users: User[]) => void;
  hasHydrated: boolean;
  setHasHydrated: (state: boolean) => void;
}

export const useAppStore = create<AppStore>()(
  persist(
    (set) => ({
      users: [],
      addUser: (user: User) =>
        set((state) => ({ users: [...state.users, user] })),
      deleteUser: (id: number) =>
        set((state) => ({
          users: state.users.filter((u) => u.id !== id),
        })),
      setUsers: (users) => set({ users }),
      hasHydrated: false,
      setHasHydrated: (state) => set({ hasHydrated: state }),
    }),
    {
      name: "store",
      storage: createJSONStorage(() => sessionStorage),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);
