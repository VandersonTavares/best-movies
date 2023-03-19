import { useState } from "react";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";

const imageUrl = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true }) => {

  const [scale] = useState(1.1);

  const splitMovieDate = movie.release_date.split("-");

  return (
    <Link to={`/movie/${movie.id}`}>
      <Tilt tiltEnable={false} scale={scale} transitionSpeed={500}>
        <div className="movie-card w-[180px] m-3 rounded-md">
          <img
            className="rounded-md"
            src={imageUrl + movie.poster_path}
            alt={movie.title}
          />
          <h2 className="overflow-hidden text-ellipsis whitespace-nowrap">
            {movie.title}
          </h2>
          <p className="text-[#777777]">{splitMovieDate[0]}</p>
        </div>
      </Tilt>
    </Link>
  );
};

export default MovieCard;
