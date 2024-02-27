import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center justify-center h-screen flex-col gap-10">
      <h1 className="tex-4xl mt-8 w-64 text-center h-12 border-black border-2 p-2.5 bg-[#A6FAFF] shadow-[2px_2px_0px_rgba(0,0,0,1)] rounded-md">
        Sign-Up to Continue
      </h1>
      <SignUp />;
    </div>
  );
}
