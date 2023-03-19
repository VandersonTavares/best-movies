import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";

import axios from "axios";

const searchUrl = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");

  
  useEffect(() => {
    const customSearchUrl = `${searchUrl}?${apiKey}&query=${query}`;
   
    axios.get(customSearchUrl)
    .then((response) => {
      console.log(response.data.results);
      setMovies(response.data.results);
    })
    .catch((e) => {
      console.log(e.message);
    })
  }, [query]);


  return (
    <div className="container">
    <h2 className="title">Resultados para: <span className="text-[#b8930c]">{query}</span></h2>
    <div className="movies-container text-center flex flex-wrap justify-center content-center w-screen">
      {movies.length === 0 && <p>Carregando...</p>}
      {movies && movies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}        
    </div>
  </div>
  )
}

export default Search;