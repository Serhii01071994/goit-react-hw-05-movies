import { Link } from 'react-router-dom';
import { filmposter } from 'servises/api';

const MoviesListItem = ({ movie, title }) => {
  return (
    <li className="movie-item">
      <Link to={`/movies/${movie.id}`}>
        <img src={filmposter(movie.poster_path)} alt={title} />
        <h1 className="title">{title}</h1>
      </Link>
    </li>
  );
};

export default MoviesListItem;
