import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between sm:p-24  mt-20 p-10">
      <div className="w-64 sm:w-96 h-54 px-4 sm:px-8 py-2 sm:py-4 bg-white border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] grid place-content-center">
        <div>
          <h1 className="sm:text-2xl mb-4">
            Discover Clerk Auth Demo, your gateway to seamless authentication in
            Next.js. Explore how Clerk simplifies user authentication with its
            powerful features. Dive into secure login flows, user management,
            and more. Start your journey to mastering authentication in Next.js
            with Clerk Auth Demo.
          </h1>
          <div className="flex space-x-2 mx-auto w-32">
            <Link
              href="https://github.com/Sxhil296/learn-clerk"
              className="h-12 w-full text-center border-black border-2 p-2.5 bg-[#A6FAFF] hover:bg-[#79F7FF] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF] rounded-full"
            >
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
