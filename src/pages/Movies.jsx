import ErrorMessage from 'components/ErrorMessege/ErrorMessage';
import Loader from 'components/Loader/Loader';
import { MoviesSearch } from 'components/MoviesSearch/MoviesSearch';
import SearchForm from 'components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from 'servises/api';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;
    const searchMovie = async () => {
      try {
        setIsLoading(true);
        const movie = await (await fetchSearchMovies(query)).results;
        setMovies(movie);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    searchMovie();
  }, [query]);

  const handleFormSubmit = e => {
    e.preventDefault();
    const searchValue = e.currentTarget.elements.query.value;
    setSearchParams({ query: searchValue });
  };

  return (
    <div>
      <SearchForm onSubmit={handleFormSubmit} />
      <section>
        {isLoading && <Loader />}
        {error && <ErrorMessage message={error} />}
        <MoviesSearch query={query} movies={movies} location={location} />
      </section>
    </div>
  );
};

export default Movies;
