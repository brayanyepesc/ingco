import { User } from "@/types/general.types";
import { Row } from "@tanstack/react-table";
import { format } from "date-fns";
import { es } from "date-fns/locale";

export const UserBirthdayCell = ({ row }: { row: Row<User> }) => {
  const birthday = row.getValue("birthday") as string;
  const formattedDate = birthday
    ? format(new Date(birthday), "dd MMM yyyy", { locale: es })
    : "N/A";
  return <div>{formattedDate}</div>;
};
