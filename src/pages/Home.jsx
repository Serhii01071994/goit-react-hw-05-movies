import ErrorMessage from 'components/ErrorMessege/ErrorMessage';
import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchAllMovies } from 'servises/api';

const Home = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const moviesData = await fetchAllMovies();
        setMovies(moviesData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div className="home-list">
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      <MoviesList movies={movies} location={location} />
    </div>
  );
};

export default Home;
