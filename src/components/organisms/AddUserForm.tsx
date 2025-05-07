"use client";

import { format } from "date-fns";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { CalendarIcon, X } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { Checkbox } from "../ui/checkbox";
import { Badge } from "../ui/badge";
import { DialogFooter } from "../ui/dialog";
import { useModalStore } from "@/store/useModalStore";
import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction } from "react";
import { UseFormReturn } from "react-hook-form";

interface AddUserFormProps {
  form: UseFormReturn<
    {
      email: string;
      birthday: Date;
      status: boolean;
      skills: string[];
      firstName: string;
      lastName: string;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    any,
    {
      email: string;
      birthday: Date;
      status: boolean;
      skills: string[];
      firstName: string;
      lastName: string;
    }
  >;
  onSubmit: (data: {
    email: string;
    birthday: Date;
    status: boolean;
    skills: string[];
    firstName: string;
    lastName: string;
  }) => void;
  addSkill: () => void;
  removeSkill: (skillToRemove: string) => void;
  skill: string;
  setSkill: Dispatch<SetStateAction<string>>;
}

export const AddUserForm = ({
  form,
  onSubmit,
  addSkill,
  removeSkill,
  setSkill,
  skill,
}: AddUserFormProps) => {
  const { closeModal } = useModalStore();
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input placeholder="Juan" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Apellido</FormLabel>
                <FormControl>
                  <Input placeholder="Pérez" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Correo electrónico</FormLabel>
              <FormControl>
                <Input placeholder="juan.perez@ejemplo.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="birthday"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Fecha de nacimiento</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "dd/MM/yyyy")
                      ) : (
                        <span>Seleccione una fecha</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Usuario activo</FormLabel>
                <FormDescription>
                  Marque esta casilla si el usuario debe estar activo en el
                  sistema.
                </FormDescription>
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="skills"
          render={() => (
            <FormItem>
              <FormLabel>Habilidades</FormLabel>
              <div className="flex gap-2">
                <Input
                  placeholder="Agregar habilidad"
                  value={skill}
                  onChange={(e) => setSkill(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      addSkill();
                    }
                  }}
                />
                <Button type="button" onClick={addSkill} variant="outline">
                  Agregar
                </Button>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {form.getValues().skills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="bg-tertiary/10 flex items-center gap-1"
                  >
                    {skill}
                    <X
                      className="h-3 w-3 cursor-pointer"
                      onClick={() => removeSkill(skill)}
                    />
                  </Badge>
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <DialogFooter>
          <Button type="button" variant="outline" onClick={closeModal}>
            Cancelar
          </Button>
          <Button type="submit" className="bg-primary">
            Guardar
          </Button>
        </DialogFooter>
      </form>
    </Form>
  );
};
