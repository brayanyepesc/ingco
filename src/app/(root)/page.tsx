"use client";

import { UsersTable } from "@/components";
import { fetchUsers } from "@/lib/fetcher";
import { useAppStore } from "@/store/useAppStore";
import { useEffect } from "react";

export default function Home() {
  const { setUsers } = useAppStore();
  useEffect(() => {
    fetchUsers().then(setUsers);
  }, [setUsers]);
  return (
    <section className="w-full min-h-screen">
      <UsersTable />
    </section>
  );
}
