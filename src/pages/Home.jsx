import { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

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
    <div className="container">
      <h2 className="title ml-3">Melhores Filmes:</h2>
      <div className="movies-container flex flex-wrap justify-center content-center w-screen">
        {topMovies.length === 0 && <p>Carregando...</p>}
        {topMovies && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}        
      </div>
    </div>
  );
};

export default Home;
