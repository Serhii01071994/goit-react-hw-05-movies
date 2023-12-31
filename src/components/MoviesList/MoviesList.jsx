import MoviesListItem from 'components/MoviesListItem/MoviesListItem';

const MoviesList = ({ movies, location }) => {
  const showMovies = Array.isArray(movies) && movies.length > 0;

  return (
    <ul className="moviesList">
      {showMovies &&
        movies.map(movie => {
          return (
            <MoviesListItem
              location={location}
              title={movie.title}
              movie={movie}
              key={movie.id}
            />
          );
        })}
    </ul>
  );
};

export default MoviesList;
