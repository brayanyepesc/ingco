/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type ModalType = "createUser" | null;

export interface ModalStore {
  modalType: ModalType;
  modalProps?: any;
  isOpen: boolean;
  openModal: (modalType: ModalType, modalProps?: any) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalStore>()(
  persist(
    (set) => ({
      modalType: null,
      modalProps: undefined,
      isOpen: false,
      openModal: (modalType: ModalType, modalProps: any) =>
        set({ modalType, modalProps, isOpen: true }),
      closeModal: () =>
        set({ modalType: null, modalProps: undefined, isOpen: false }),
    }),
    {
      name: "modal",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
