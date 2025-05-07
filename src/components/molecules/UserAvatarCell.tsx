import { Row } from "@tanstack/react-table";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { User } from "@/types/general.types";

export const UserAvatarCell = ({ row }: { row: Row<User> }) => {
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
};
