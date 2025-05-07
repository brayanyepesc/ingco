import { User } from "@/types/general.types";
import { Row } from "@tanstack/react-table";
import { Badge } from "../ui/badge";

export const UserStatusCell = ({ row }: { row: Row<User> }) => {
  const status = row.getValue("status") as boolean;
  return (
    <Badge
      variant={status ? "default" : "destructive"}
      className={status ? "bg-primary" : ""}
    >
      {status ? "Activo" : "Inactivo"}
    </Badge>
  );
};
