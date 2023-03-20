import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import { BsHourglassSplit } from "react-icons/bs";

import MovieCard from "../components/MovieCard";

import axios from "axios";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?${apiKey}`;

    axios
      .get(movieUrl)
      .then((response) => {
        // console.log(response.data);
        setMovie(response.data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  return (
    <div className="movie-page flex justify-center">
      {movie && (
        <div className="movie-container">
          <div className="movie-card border">
            <MovieCard movie={movie} imgSize={"w-[400px]"} activeLink={false} />
          </div>
          <div className="info flex">
            <h3 className="mt-1"><BsHourglassSplit/></h3>
            <p>{movie.runtime}</p>
          </div>
          <div className="info flex">
            <h3 className="mt-1"><BsHourglassSplit/></h3>
            <p>{movie.runtime}</p>
          </div>
          <div className="info flex">
            <h3 className="mt-1"><BsHourglassSplit/></h3>
            <p>{movie.runtime}</p>
          </div>
          <div className="info flex">
            <h3 className="mt-1"><BsHourglassSplit/></h3>
            <p>{movie.runtime}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Movie;
