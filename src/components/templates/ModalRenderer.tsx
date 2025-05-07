import { useModalStore } from "@/store/useModalStore";
import { MODAL_COMPONENTS } from "@/components";

export const ModalRenderer = () => {
  const { modalType, modalProps, closeModal, isOpen } = useModalStore();
  if (!modalType) return null;
  const ModalComponent = MODAL_COMPONENTS[modalType];
  if (!ModalComponent) return null;
  return (
    <ModalComponent {...modalProps} isOpen={isOpen} onClose={closeModal} />
  );
};
