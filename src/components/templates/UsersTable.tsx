"use client";

import { useTable } from "@/hooks/useTable";
import {
  UsersTableContent,
  UsersTableFooter,
  UsersTableHeader,
} from "@/components";

export const UsersTable = () => {
  const { table, columnsLength } = useTable();
  return (
    <div className="w-full p-5 md:p-20">
      <UsersTableHeader table={table} />
      <UsersTableContent table={table} columnsLength={columnsLength} />
      <UsersTableFooter table={table} />
    </div>
  );
};
