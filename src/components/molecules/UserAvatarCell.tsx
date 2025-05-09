import { Row } from "@tanstack/react-table";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { User } from "@/types/general.types";

export const UserAvatarCell = ({ row }: { row: Row<User> }) => {
  const firstName = row.getValue("firstName") as string;
  const lastName = row.getValue("lastName") as string;
  const initials = `${firstName?.charAt(0) || ""}${
    lastName?.charAt(0) || ""
  }`.toUpperCase();
  return (
    <Avatar>
      <AvatarFallback className="bg-primary text-white">
        {initials}
      </AvatarFallback>
    </Avatar>
  );
};
