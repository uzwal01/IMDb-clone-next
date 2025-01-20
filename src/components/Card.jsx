import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiThumbsUp } from "react-icons/fi";

function Card({ result }) {
  return (
    <div className="group sm:hover:shadow-slate-400 rounded-t-lg overflow-hidden shadow-md cursor-pointer border transition-shadow duration-200 px-2 sm:px-0">
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          width={500}
          height={100}
          alt={`${result.id}`}
          className="group-hover:opacity-75 transition-opacity duration-300 object-cover h-[20vh] sm:h-[30vh] md:h-[35vh] lg:h-[40vh]"
          priority
        ></Image>
        <div className="p-2">
          <h2 className="text-lg font-semibold truncate">
            {result.title || result.name}
          </h2>
          <p className="line-clamp-2 text-md mb-2">{result.overview}</p>
          <p className="flex items-center">
            {result.release_date || result.first_air_date}
            <FiThumbsUp className="h-5 w-5 text-blue-500 mr-1 ml-3" />
            {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Card;
