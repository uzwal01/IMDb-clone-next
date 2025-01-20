"use client";
const TMDB_BASE_URL = "https://api.themoviedb.org/3";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

async function fetchGenres() {
  if (!process.env.NEXT_PUBLIC_API_KEY) {
    console.error("API key is missing!");
    return [];
  }

  try {
    const res = await fetch(
      `${TMDB_BASE_URL}/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    return data.genres || [];
  } catch (error) {
    console.error("Failed to fetch genres:", error);
    return [];
  }
}

function GenreFilter() {
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const getGenres = async () => {
      const genreData = await fetchGenres();
      setGenres(genreData);
      setLoading(false);
    };
    getGenres();
  }, []);

  const handleGenreClick = (genreId) => {
    router.push(`/genres/${genreId}`);
    setShowPopup((prev) => !prev);
  };

  const togglePopup = () => {
    setShowPopup((prev) => !prev);
  };

  return (
    <div className="relative">
      <button
        onClick={togglePopup}
        className="px-3 py-1 bg-amber-500 font-semibold rounded hover:bg-amber-600"
      >
        Filter
      </button>

      {showPopup && (
        <div className="absolute top-12 left-0 bg-white border border-gray-300 shadow-md rounded p-4 w-[26rem] max-h-[60vh] overflow-y-auto z-10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg text-amber-500 font-bold">Select Genre</h2>
            <button
              onClick={togglePopup}
              className="text-gray-500 hover:text-amber-500 "
            >
              ✕
            </button>
          </div>
          {loading ? (
            <p>Loading genres...</p>
          ) : genres.length > 0 ? (
            <ul className="grid grid-cols-2 gap-2 w-full">
              {genres.map((genre) => (
                <li key={genre.id} className="">
                  <button
                    onClick={() => handleGenreClick(genre.id)}
                    className="w-full text-left dark:text-black px-3 py-1 border bg-gray-100 rounded hover:bg-gray-200"
                  >
                    {genre.name}
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p>No genres available.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default GenreFilter;
