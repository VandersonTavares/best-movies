import { useState, useEffect } from "react";

import MovieCard from "../components/MovieCard";

import axios from "axios";

import Tilt from "react-parallax-tilt";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);
  const [scale] = useState(1.1);

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;

    axios
      .get(topRatedUrl)
      .then((response) => {
        setTopMovies(response.data.results);
        // console.log(response.data.results)
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  return (
    <div className="container m-auto">
      <h2 className="title text-center text-[25px] mb-7">Melhores Filmes</h2>
      <div className="movies-container flex flex-wrap justify-center">
        {topMovies.length === 0 && <p>Carregando...</p>}
        {topMovies &&
          topMovies.map((movie) => (
            <Tilt key={movie.id} tiltEnable={false} scale={scale} transitionSpeed={500}>
              <MovieCard key={movie.id} movie={movie} imgSize={"w-[180px]"} />
            </Tilt>
          ))}
      </div>
    </div>
  );
};

export default Home;
