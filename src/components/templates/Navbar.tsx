import { UserButton } from "@clerk/nextjs";

export const Navbar = () => {
  return (
    <nav className="w-full h-16 bg-primary px-8 p-2">
      <div className="flex justify-between items-center h-full">
        <span>
          <h2 className="text-4xl text-white">
            INGCO<span className="text-sm font-bold">app</span>
          </h2>
        </span>
        <UserButton />
      </div>
    </nav>
  );
};
