import { User } from "@/types/general.types";
import { Row } from "@tanstack/react-table";
import { Checkbox } from "../ui/checkbox";

export const UserSelectCell = ({ row }: { row: Row<User> }) => {
  return (
    <Checkbox
      checked={row.getIsSelected()}
      onCheckedChange={(value) => row.toggleSelected(!!value)}
      aria-label="Seleccionar fila"
    />
  );
};
