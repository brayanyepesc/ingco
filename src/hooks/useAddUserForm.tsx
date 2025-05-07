import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { User } from "@/types/general.types";
import { useAppStore } from "@/store/useAppStore";
import { useModalStore } from "@/store/useModalStore";
import { useState } from "react";

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  lastName: z.string().min(2, {
    message: "El apellido debe tener al menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Ingrese un correo electrónico válido.",
  }),
  status: z.boolean(),
  birthday: z.date({
    required_error: "Seleccione una fecha de nacimiento.",
  }),
  skills: z.array(z.string()).min(1, {
    message: "Agregue al menos una habilidad.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export const useAddUserForm = () => {
  const { users, addUser } = useAppStore();
  const { closeModal } = useModalStore();
  const [skill, setSkill] = useState("");

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      status: true,
      birthday: new Date(),
      skills: [],
    },
  });

  const addSkill = () => {
    if (skill.trim() && !form.getValues().skills.includes(skill.trim())) {
      form.setValue("skills", [...form.getValues().skills, skill.trim()]);
      setSkill("");
    }
  };

  const removeSkill = (skillToRemove: string) => {
    form.setValue(
      "skills",
      form.getValues().skills.filter((s) => s !== skillToRemove)
    );
  };

  const onSubmit = (data: FormValues) => {
    const newUser: User = {
      id: users.length > 0 ? Math.max(...users.map((user) => user.id)) + 1 : 1,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      status: data.status,
      birthday: data.birthday.toISOString(),
      skills: data.skills,
      avatar: [],
    };
    addUser(newUser);
    closeModal();
    form.reset();
  };

  return {
    form,
    onSubmit,
    addSkill,
    removeSkill,
    skill,
    setSkill
  };
};
