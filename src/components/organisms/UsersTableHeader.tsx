"use client";

import { User } from "@/types/general.types";
import { Table } from "@tanstack/react-table";
import { Input } from "../ui/input";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";
import { useModalStore } from "@/store/useModalStore";

export const UsersTableHeader = ({ table }: { table: Table<User> }) => {
  const { openModal } = useModalStore();
  return (
    <div className="flex items-center py-4 gap-2">
      <Input
        placeholder="Filtrar por nombre..."
        value={(table.getColumn("firstName")?.getFilterValue() as string) ?? ""}
        onChange={(event) =>
          table.getColumn("firstName")?.setFilterValue(event.target.value)
        }
        className="max-w-sm"
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="ml-auto">
            Columnas <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {table
            .getAllColumns()
            .filter((column) => column.getCanHide())
            .map((column) => {
              return (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className="capitalize"
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) => column.toggleVisibility(!!value)}
                >
                  {column.id === "firstName"
                    ? "Nombre"
                    : column.id === "lastName"
                    ? "Apellido"
                    : column.id === "email"
                    ? "Correo"
                    : column.id === "status"
                    ? "Estado"
                    : column.id === "birthday"
                    ? "Fecha de nacimiento"
                    : column.id === "skills"
                    ? "Habilidades"
                    : column.id}
                </DropdownMenuCheckboxItem>
              );
            })}
        </DropdownMenuContent>
      </DropdownMenu>
      <Button className="cursor-pointer" onClick={() => openModal("createUser")}>Agregar</Button>
    </div>
  );
};
