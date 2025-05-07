import { Navbar } from "@/components";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-full h-full">
      <Navbar />
      {children}
    </main>
  );
}
