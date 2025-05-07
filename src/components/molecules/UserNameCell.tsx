import { User } from "@/types/general.types";
import { Column } from "@tanstack/react-table";
import { Button } from "../ui/button";
import { ArrowUpDown } from "lucide-react";

export const UserNameCell = ({ column }: { column: Column<User, unknown> }) => {
  return (
    <Button
      variant="ghost"
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    >
      Nombre
      <ArrowUpDown className="ml-2 h-4 w-4" />
    </Button>
  );
};
