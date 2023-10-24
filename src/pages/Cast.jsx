import ErrorMessage from "components/ErrorMessege/ErrorMessage";
import Loader from "components/Loader/Loader";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast, filmposter } from "servises/api";

const Cast = () => {
     const { movieId } = useParams();
     const [currentCast, setCurrentCast] = useState(null);
     const [isLoading, setIsLoading] = useState(false);
     const [error, setError] = useState(null);

     useEffect(() => {
       const fetchCast = async () => {
         try {
           setIsLoading(true);
           const moviesCast = await fetchMovieCast(movieId);
           setCurrentCast(moviesCast);
         } catch (error) {
           setError(error.message);
         } finally {
           setIsLoading(false);
         }
       };
       fetchCast();
     }, [movieId]);
    
    if (currentCast?.length === 0) {
      return <p>No info</p>;
    }
    
    
    return (
        <div className="actor-card">
        {isLoading && <Loader />}
        {error && <ErrorMessage message={error} />}
        {currentCast &&
          currentCast.map(actor => (
            <div className="actor" key={actor.id}>
              <img
                src={filmposter(actor.profile_path)}
                      alt={actor.original_name}
                      width={150}
                      
              />
              <p className="under-title">{actor.original_name}</p>
              <p className="text">Character: {actor.character}</p>
            </div>
          ))}
      </div>
    );
}
export default Cast