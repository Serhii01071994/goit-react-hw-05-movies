import { MoviesSearch } from 'components/MoviesSearch/MoviesSearch';
import SearchForm from 'components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const handleFormSubmit = e => {
    e.preventDefault();
    const searchValue = e.currentTarget.elements.searchQuery.value;
    setSearchParams({ query: searchValue });
  };

  useEffect(() => {
    const fetchMovieDetailsById = async () => {
      try {
        setIsLoading(true);
        const moviesData = await fetchMovieDetails(movieId);
        setMoviesDetails(moviesData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieDetailsById();
  }, [movieId]);
  

  return (
    <div>
      <SearchForm onSubmit={handleFormSubmit} />
      <MoviesSearch searchParams={searchParams} />
    </div>
  );
};

export default Movies;
