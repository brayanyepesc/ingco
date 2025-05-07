"use client";

import { User } from "@/types/general.types";
import { type ColumnDef } from "@tanstack/react-table";
import {
  UserActionsCell,
  UserAvatarCell,
  UserBirthdayCell,
  UserLastnameCell,
  UserNameCell,
  UserSelectCell,
  UserSelectHeader,
  UserSkillsCell,
  UserStatusCell,
} from "@/components";

export const usersTableColumns: ColumnDef<User>[] = [
  {
    id: "select",
    header: ({ table }) => <UserSelectHeader table={table} />,
    cell: ({ row }) => <UserSelectCell row={row} />,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "avatar",
    header: "Avatar",
    cell: ({ row }) => <UserAvatarCell row={row} />,
  },
  {
    accessorKey: "firstName",
    header: ({ column }) => <UserNameCell column={column} />,
  },
  {
    accessorKey: "lastName",
    header: ({ column }) => <UserLastnameCell column={column} />,
  },
  {
    accessorKey: "email",
    header: "Correo",
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "status",
    header: "Estado",
    cell: ({ row }) => <UserStatusCell row={row} />,
  },
  {
    accessorKey: "birthday",
    header: "Fecha de nacimiento",
    cell: ({ row }) => <UserBirthdayCell row={row} />,
  },
  {
    accessorKey: "skills",
    header: "Habilidades",
    cell: ({ row }) => <UserSkillsCell row={row} />,
  },
  {
    id: "actions",
    cell: ({ row }) => <UserActionsCell row={row} />,
  },
];
