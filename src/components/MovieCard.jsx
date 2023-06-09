import { useState } from "react";

import { Link } from "react-router-dom";

import { AiFillStar } from "react-icons/ai";

const imageUrl = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, imgSize, activeLink = true }) => {
  const [scale] = useState(1.1);

  const splitMovieDate = movie.release_date.split("-");

  return (
    <div>
        <Link to={`/movie/${movie.id}`}>
          <div className={`movie-card m-3 rounded-md ${imgSize}`}>
            <img
              className="rounded-md"
              src={imageUrl + movie.poster_path}
              alt={movie.title}
            />
            <h2 className="overflow-hidden text-ellipsis whitespace-nowrap">
              {movie.title}
            </h2>
            <div className="flex justify-between">
              <span className="text-[#777777]">{splitMovieDate[0]}</span>
              <span className="text-[#777777] flex">
                {" "}
                <AiFillStar className="mt-1 text-[#b8930c]" />{" "}
                {movie.vote_average.toFixed(1)}
              </span>
            </div>
          </div>
        </Link>
    </div>
  );
};

export default MovieCard;
