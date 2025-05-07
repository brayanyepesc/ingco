"use client";

import { User } from "@/types/general.types";
import { type ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "../ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ArrowUpDown } from "lucide-react";
import { Button } from "../ui/button";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Badge } from "../ui/badge";
import { UserActionsCell } from "@/components";

export const usersTableColumns: ColumnDef<User>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Seleccionar todo"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Seleccionar fila"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "avatar",
    header: "Avatar",
    cell: ({ row }) => {
      const avatarArray = row.getValue("avatar") as User["avatar"];
      const avatarUrl =
        avatarArray && avatarArray.length > 0 ? avatarArray[0].url : "";
      const firstName = row.getValue("firstName") as string;
      const lastName = row.getValue("lastName") as string;
      const initials = `${firstName?.charAt(0) || ""}${
        lastName?.charAt(0) || ""
      }`.toUpperCase();

      return (
        <Avatar>
          <AvatarImage
            src={avatarUrl || "/placeholder.svg"}
            alt={`${firstName} ${lastName}`}
          />
          <AvatarFallback className="bg-primary text-white">
            {initials}
          </AvatarFallback>
        </Avatar>
      );
    },
  },
  {
    accessorKey: "firstName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nombre
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "lastName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Apellido
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "email",
    header: "Correo",
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "status",
    header: "Estado",
    cell: ({ row }) => {
      const status = row.getValue("status") as boolean;

      return (
        <Badge
          variant={status ? "default" : "destructive"}
          className={status ? "bg-primary" : ""}
        >
          {status ? "Activo" : "Inactivo"}
        </Badge>
      );
    },
  },
  {
    accessorKey: "birthday",
    header: "Fecha de nacimiento",
    cell: ({ row }) => {
      const birthday = row.getValue("birthday") as string;
      const formattedDate = birthday
        ? format(new Date(birthday), "dd MMM yyyy", { locale: es })
        : "N/A";

      return <div>{formattedDate}</div>;
    },
  },
  {
    accessorKey: "skills",
    header: "Habilidades",
    cell: ({ row }) => {
      const skills = row.getValue("skills") as string[];

      return (
        <div className="flex flex-wrap gap-1">
          {skills && skills.length > 0
            ? skills.slice(0, 2).map((skill, index) => (
                <Badge key={index} variant="outline" className="bg-tertiary/10">
                  {skill}
                </Badge>
              ))
            : "N/A"}
          {skills && skills.length > 2 && (
            <Badge variant="outline" className="bg-tertiary/10">
              +{skills.length - 2}
            </Badge>
          )}
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const user = row.original;
      return <UserActionsCell user={user} />;
    },
  },
];
