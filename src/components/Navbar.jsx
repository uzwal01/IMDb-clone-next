import React, { Suspense } from "react";
import NavbarItem from "./NavbarItem";
import GenreFilter from "./GenreFilter";

function Navbar() {
  return (
    <>
      <Suspense>
        <div className="dark:bg-gray-600 bg-amber-100 p-4">
          {/* Centered container with max width */}
          <div className="container mx-auto max-w-5xl grid grid-cols-3">
            {/* GenreFilter on the left */}
            <div>
              <GenreFilter />
            </div>

            {/* Navbar items centered */}
            <div className="flex justify-center gap-6">
              <NavbarItem title="Trending" param="fetchTrending" />
              <NavbarItem title="Top Rated" param="fetchTopRated" />
            </div>
          </div>
        </div>
      </Suspense>
    </>
  );
}

export default Navbar;
