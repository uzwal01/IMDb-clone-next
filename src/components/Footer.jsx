import Link from "next/link";
import React from "react";
import NavbarItem from "./NavbarItem";

function Footer() {
  return (
    <div className="bg-amber-100 dark:bg-gray-600 w-full h-auto mt-5 py-[2rem]">
      <div className="max-w-6xl grid grid-cols-2 mx-auto">
        <div className="">
          <Link href={"/"} className="flex gap-1 items-center pb-2">
            <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">
              IMDb
            </span>
            <span className="text-xl hidden sm:inline">Clone</span>
          </Link>
          <p className="text-sm pb-[1rem]">
            <span className="text-amber-600">IMDb Clone</span> - Movies online, here you can watch movie ratings online
            for free without annoying of advertising, just come and search for
            the best movie you want to watch based on the latest ratings and
            votes.
          </p>
          <p className="text-[12px]">
            Disclaimer: This site does not store any files on its server. All
            contents are provided by non-affiliated third parties.
          </p>
        </div>
        <div className="flex items-center justify-center">
            <p>IMDb Clone © 2025. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
