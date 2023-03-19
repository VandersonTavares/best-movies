import { Link } from "react-router-dom";

const imageUrl = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true }) => {
  return (
    <div className="movie-card">
      <img src={imageUrl + movie.poster_path} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.vote_avarage}</p>
      {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </div>
  );
};

export default MovieCard;
