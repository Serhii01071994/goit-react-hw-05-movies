import ErrorMessage from "components/ErrorMessege/ErrorMessage";
import Loader from "components/Loader/Loader";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast, filmposter } from "servises/api";

const Cast = () => {
    
     const { movieId } = useParams();
     const [cast, setCast] = useState(null);
     const [isLoading, setIsLoading] = useState(false);
     const [error, setError] = useState(null);

     useEffect(() => {
       const fetchCast = async () => {
         try {
           setIsLoading(true);
           const moviesCast = await fetchMovieCast(movieId);
           setCast(moviesCast);
         } catch (error) {
           setError(error.message);
         } finally {
           setIsLoading(false);
         }
       };
       fetchCast();
     }, [movieId]);
    
    if (cast?.length === 0) {

      return <p>No info</p>;
    }
    
    const showCast = Array.isArray(cast) && cast.length > 0;
    return (
      <div>
        {isLoading && <Loader />}
        {error && <ErrorMessage message={error} />}
        {showCast &&
          cast.map(actor => (
            <div key={actor.id}>
              <img
                src={filmposter(actor.profile_path)}
                alt={actor.original_name}
              />
              <p>{actor.original_name}</p>
              <p className="text">Character: {actor.character}</p>
            </div>
          ))}
      </div>
    );
}
export default Cast