import { User } from "@/types/general.types";
import axios from "axios";

export const fetchUsers = async (): Promise<User[]> => {
  if (!process.env.NEXT_PUBLIC_API_URL) {
    throw new Error("API URL is not defined in environment variables.");
  }
  const res = await axios.get(process.env.NEXT_PUBLIC_API_URL);
  return res.data.filter((user: User) => user.status === true);
};
