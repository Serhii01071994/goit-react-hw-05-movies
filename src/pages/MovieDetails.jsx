import ErrorMessage from 'components/ErrorMessege/ErrorMessage';
import Loader from 'components/Loader/Loader';
import { MovieDetailsCard } from 'components/MovieDetailsCard/MovieDetailsCard';
import { useEffect, useRef, useState } from 'react';
import { Link, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'servises/api';
import Cast from './Cast';
import Reviews from './Reviews';
import { AdditionalInformation } from 'components/AdditionalInformation/AdditionalInformation';
import { StyledLink } from 'components/App/App.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ??"/")
  const [moviesDetails, setMoviesDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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
    <StyledLink>
      <div className="container">
        {isLoading && <Loader />}
        {error && <ErrorMessage message={error} />}
        <Link to={backLinkHref.current} className='go-back'>Go Back</Link>
        <MovieDetailsCard moviesDetails={moviesDetails} />
        <AdditionalInformation backLinkHref={backLinkHref} />
        <Routes>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Routes>
      </div>
    </StyledLink>
  );
};

export default MovieDetails;
