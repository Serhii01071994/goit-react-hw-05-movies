import { Link } from 'react-router-dom';
import { filmposter } from 'servises/api';

const MoviesListItem = ({ movie, title, location }) => {
  return (
    <li className="movie-item">
      <Link to={`/movies/${movie.id}`} state={{from: location}}>
        <img src={filmposter(movie.poster_path)} alt={title} />
        <h1 className="title">{title}</h1>
      </Link>
    </li>
  );
};

export default MoviesListItem;
