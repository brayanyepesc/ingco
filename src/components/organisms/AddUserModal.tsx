"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { useAddUserForm } from "@/hooks/useAddUserForm";
import { useModalStore } from "@/store/useModalStore";
import { AddUserForm } from "./AddUserForm";

export const AddUserModal = () => {
  const { isOpen, closeModal } = useModalStore();
  const { form, onSubmit, addSkill, removeSkill, skill, setSkill } =
    useAddUserForm();
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && closeModal()}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Agregar nuevo usuario</DialogTitle>
          <DialogDescription>
            Complete el formulario para agregar un nuevo usuario al sistema.
          </DialogDescription>
        </DialogHeader>
        <AddUserForm
          form={form}
          onSubmit={onSubmit}
          addSkill={addSkill}
          removeSkill={removeSkill}
          skill={skill}
          setSkill={setSkill}
        />
      </DialogContent>
    </Dialog>
  );
};
