"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FiThumbsUp } from "react-icons/fi";
import { useRouter, useParams } from "next/navigation";

const GenrePage = () => {
  const { id: genreId } = useParams(); // Use `useParams` to get the `id`
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (!genreId) return; // Ensure `genreId` exists before making the fetch request

    const fetchMoviesByGenre = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=${genreId}`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch movies.");
        }

        const data = await res.json();
        setMovies(data.results || []);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchMoviesByGenre();
  }, [genreId]); // This will re-run the fetch whenever `genreId` changes.

  if (isLoading) {
    return <p>Loading movies...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const handleMovieClick = (movieId) => {
    router.push(`/movie/${movieId}`);
  };

  return (
    <div className="max-w-6xl mx-auto px-2 sm:px-0">
      <h1 className="text-2xl font-bold mb-4">Movies in Genre: {genreId}</h1>

      {movies.length > 0 ? (
        <div className=" grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  max-w-6xl mx-auto py-4 gap-4">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="group sm:hover:shadow-slate-400 border rounded-t-lg overflow-hidden shadow-md cursor-pointer"
              onClick={() => handleMovieClick(movie.id)}
            >
              {movie.poster_path || movie.backdrop_path ? (
                <Image
                  src={`https://image.tmdb.org/t/p/w500${
                    movie.poster_path || movie.backdrop_path
                  }`}
                  width={500}
                  height={100}
                  alt={`${movie.id}`}
                  className="group-hover:opacity-75 transition-opacity duration-300 object-cover h-[20vh] sm:h-[30vh] lg:h-[42vh]"
                  priority
                />
              ) : (
                <div className="bg-gray-300 h-64 flex items-center justify-center">
                  <span>No Image</span>
                </div>
              )}
              <div className="p-2 ">
                <h2 className="text-lg font-semibold truncate">
                  {movie.title}
                </h2>
                <p className="text-gray-600 dark:text-white line-clamp-2 text-md mb-2">
                  {movie.overview || "No description available."}
                </p>
                <p className="flex items-center text-md dark:text-white text-gray-500 mt-2">
                  {movie.release_date || movie.first_air_date}
                  <FiThumbsUp className="h-5 w-5 text-blue-500 mr-1 ml-3" />
                  {movie.vote_count}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No movies found for this genre.</p>
      )}
    </div>
  );
};

export default GenrePage;
