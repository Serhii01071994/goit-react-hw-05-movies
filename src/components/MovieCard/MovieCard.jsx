import { Link } from 'react-router-dom';
import { filmposter } from 'servises/api';

export const MovieCard = ({ movie, location }) => {
  return (
    <li className="movie-list">
      <Link state={{ from: location }} to={`/movies/${movie.id}`}>
        <img src={filmposter(movie.poster_path)} alt={movie.title} />
        <p className="title">{movie.title}</p>
      </Link>
    </li>
  );
};
