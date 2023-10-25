import { MovieCard } from 'components/MovieCard/MovieCard';

export const MoviesSearch = ({ movies, location }) => {
  return (
    <ul className="moviesList">
      {movies !== null &&
        movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} location={location} />
        ))}
    </ul>
  );
};
