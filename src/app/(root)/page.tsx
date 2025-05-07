"use client";

import { UsersTable } from "@/components";
import { fetchUsers } from "@/lib/fetcher";
import { useAppStore } from "@/store/useAppStore";
import { useEffect } from "react";

export default function Home() {
  const { users, setUsers, hasHydrated } = useAppStore();
  const isEmpty = users.length === 0;
  useEffect(() => {
    if (hasHydrated && isEmpty) {
      fetchUsers().then(setUsers);
    }
  }, [setUsers, isEmpty, hasHydrated]);
  if (!hasHydrated) return <div>Cargando datos...</div>;
  return (
    <section className="w-full min-h-screen">
      <UsersTable />
    </section>
  );
}
