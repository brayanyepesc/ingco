import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <main className="w-full min-h-screen flex justify-center items-center bg-gradient-to-tr from-tertiary to-primary">
      <SignIn />
    </main>
  );
}
