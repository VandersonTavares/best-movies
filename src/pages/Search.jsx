import { useState, useEffect } from "react";

import { useSearchParams } from "react-router-dom";

import axios from "axios";

import MovieCard from "../components/MovieCard";

import Tilt from "react-parallax-tilt";

const searchUrl = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {
  const [searchParams] = useSearchParams();
  const [scale] = useState(1.1);

  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");

  useEffect(() => {
    const customSearchUrl = `${searchUrl}?${apiKey}&query=${query}`;

    axios
      .get(customSearchUrl)
      .then((response) => {
        // console.log(response.data.results);
        setMovies(response.data.results);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, [query]);

  return (
    <div className="container m-auto">
      <h2 className="title text-center text-[25px] mb-7">
        Resultados para: <span className="text-[#b8930c]">{query}</span>
      </h2>
      <div className="flex flex-wrap justify-center">
        {movies.length === 0 && <p>Carregando...</p>}
        {movies &&
          movies.map((movie) => (
            <Tilt key={movie.id} tiltEnable={false} scale={scale} transitionSpeed={500}>
              <MovieCard movie={movie} imgSize={"w-[200px]"} />
            </Tilt>
          ))}
      </div>
    </div>
  );
};

export default Search;
