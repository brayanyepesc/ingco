"use client";

import { Loading, UsersTable } from "@/components";
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
  if (!hasHydrated) return <Loading />;
  return (
    <section className="w-full min-h-screen">
      <UsersTable />
    </section>
  );
}
