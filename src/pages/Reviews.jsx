import ErrorMessage from 'components/ErrorMessege/ErrorMessage';
import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'servises/api';

const Reviews = () => {
  const { movieId } = useParams();
  const [currentReviews, setCurrentReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setIsLoading(true);
        const moviesReviews = await fetchMovieReviews(movieId);
        setCurrentReviews(moviesReviews);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchReviews();
  }, [movieId]);

  if (currentReviews?.length === 0) {
    return <p>No info</p>;
  }

  return (
    <div>
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {currentReviews &&
        currentReviews.map(authors => (
          <div key={authors.author}>
            <h2 className="under-title">{authors.author}</h2>
            <p className="text">{authors.content}</p>
          </div>
        ))}
    </div>
  );
};
export default Reviews;
