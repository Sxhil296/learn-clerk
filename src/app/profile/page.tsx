import React from "react";
import { currentUser } from "@clerk/nextjs";
import Link from "next/link";

type Props = {};

export default async function page({}: Props) {
  const user = await currentUser();
  console.log(user);
  if (!user)
    return (
     <div className="container mx-auto flex items-center justify-center h-screen">
         <div className="w-96 px-8 py-4 bg-white border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] grid place-content-center">
        <div>
          <h1 className="text-2xl mb-4">You are not logged in</h1>
          <div className="flex space-x-2 mx-auto w-32">
            <Link href={"/sign-in"} className="text-base">
              Sign In
            </Link>
            <Link
              href={"/sign-up"}
              className="h-12 border-black border-2 p-2.5 bg-[#A6FAFF] hover:bg-[#79F7FF] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF] rounded-full"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
     </div>
    );
  else
    return (
     <div className="container mx-auto flex items-center justify-center h-screen">
      <div className="w-80 max-h-90 border-black border-2 rounded-md hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white">
        <a href="" className="block cursor-pointer">
          <article className="w-full h-full">
            <figure className="w-full h-1/2 border-black border-b-2">
              <img
                src={user.imageUrl}
                alt="thumbnail"
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="px-6 py-5 text-left h-full">
              {/* <p className="text-base mb-4">May 15th, 2023</p> */}
              <h1 className="text-[32px] mb-4">{user.firstName} {user.lastName}</h1>
              <p className="text-xs mb-4 line-clamp-4">
                This user card is visible only when you are logged in.
              </p>
              <strong>Email : {user.emailAddresses[0].emailAddress}</strong>
            </div>
          </article>
        </a>
      </div></div>
    );
}
