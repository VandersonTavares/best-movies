import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import MovieCard from '../components/MovieCard';

import axios from 'axios';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState(null);

  const USDollar = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});


  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?${apiKey}`;

    axios
      .get(movieUrl)
      .then((response) => {
        setMovie(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e.message);
      });

  }, [])

  return (
    <div className='m-2 border flex'>
      {movie && <MovieCard movie={movie} imgSize={'w-[300px]'} />}
      <div className="info m-4 ">
        <h2 className='tagline m-3 text-center text-[30px]'>{movie?.tagline}</h2>
        {movie?.budget > 0 && <p>Orçamento: {USDollar.format(movie?.budget)}</p>}
        {movie?.revenue > 0 && <p>Receita: {USDollar.format(movie?.revenue)}</p>}
        <p>Duração: {movie?.runtime} Minutos</p>
        <p>Data de Lançamento: {movie?.release_date}</p>
        <p>Generos: {movie?.genres[0]?.name} / {movie?.genres[1]?.name}</p>
        <p className='mt-3'>Descrição: {movie?.overview} </p>
      </div>
    </div>
  )
}

export default Movie