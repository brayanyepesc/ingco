import { User } from "@/types/general.types";
import { Table } from "@tanstack/react-table";
import { Checkbox } from "../ui/checkbox";

export const UserSelectHeader = ({ table }: { table: Table<User> }) => {
  return (
    <Checkbox
      checked={
        table.getIsAllPageRowsSelected() ||
        (table.getIsSomePageRowsSelected() && "indeterminate")
      }
      onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
      aria-label="Seleccionar todo"
    />
  );
};
