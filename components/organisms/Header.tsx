'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* LOGO */}
          <div className="md:flex md:items-center md:gap-12">
            <Link href="/">
              <Image
              src="/images/logoCineYaMi.png"
              alt="Logo CineYaMi"
              width={180}
              height={150}
              />
            </Link>
          </div>

          {/* MENU */}
          <div className="hidden md:block">
            <Navbar />
          </div>

          {/* BOTÃO MOBILE */}
          <div className="block md:hidden">
            <button className="rounded-sm bg-gray-100 p-2 text-gray-600 dark:bg-gray-800 dark:text-white">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
