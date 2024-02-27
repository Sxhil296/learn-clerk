"use client";
import Link from "next/link";
import { useState } from "react";
import { GitHub, Menu, X } from "react-feather";
import Button from "./Button";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Header = () => {
  const [showSideMenu, setShowSideMenu] = useState(false);

  const closeSideMenu = () => {
    setShowSideMenu(false);
  };
  return (
    <header className="bg-white h-20 w-full fixed top-0 z-40">
      <div className="w-full h-full m-auto flex justify-between items-center px-5 md:px-24">
        <Link href="/" className="text-2xl font-bold">
          Next_Clerk.
        </Link>

        <nav className="hidden md:block w-1/2">
          <ul className="flex justify-end items-center space-x-4">
            <li className="inline-block p-2 cursor-pointer">
              <UserButton afterSignOutUrl="/"/>
            </li>

            <li className="flex gap-2">
              <SignedOut>
                <Link href="/sign-in">
                  <Button buttonLabel="SignIn" />
                </Link>
                <Link href="/sign-up">
                  <Button buttonLabel="SignUp" />
                </Link>
              </SignedOut>
              <SignedIn>
                <Link href="/profile">
                  <Button buttonLabel="Profile" />
                </Link>
              </SignedIn>
            </li>
          </ul>
        </nav>
        <button
          className="md:hidden"
          onClick={() => {
            setShowSideMenu(true);
          }}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>
      {/* side menu for mobile */}
      <div
        className={`navbar-menu relative z-50 ${
          showSideMenu ? "block" : "hidden"
        }`}
      >
        <div
          className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"
          onClick={closeSideMenu}
        ></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm bg-white border-r overflow-y-auto">
          <div className="flex justify-center items-center h-20 p-5">
            <Link
              href="/"
              className="mr-auto text-2xl font-bold leading-none"
              onClick={closeSideMenu}
            >
             Next_Clerk.
            </Link>
            <div>
              <button className="navbar-close" onClick={closeSideMenu}>
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
          <div className="p-5">
            <ul className="flex flex-col">
              <div className="pb-8">
                <li
                  className="flex flex-col gap-4 hover:underline hover:underline-offset-8 mb-4"
                  onClick={closeSideMenu}
                >
                  <SignedOut>
                    <Link href={"/sign-in"}>Sign In</Link>
                    <Link href={"/sign-up"}>Sign Up</Link>
                  </SignedOut>
                  <SignedIn>
                    <Link href='/profile'>Profile</Link>
                    <UserButton />
                  </SignedIn>
                </li>
              </div>

              <div className="pb-4">
                <li className="inline-block cursor-pointer">
                  <a
                    href="https://github.com/Sxhil296/learn-clerk"
                    target="_blank"
                  >
                    <GitHub className="w-6 h-6" />
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
