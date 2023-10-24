import SearchForm from "components/SearchForm/SearchForm";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const Movies = () => {
     const [searchParams, setSearchParams] = useSearchParams();
     const query = searchParams.get('query');

     useEffect(() => {
       if (!query) return;
     }, [query]);

     const handleFormSubmit = e => {
       e.preventDefault();
       const searchValue = e.currentTarget.elements.searchQuery.value;
         setSearchParams({ query: searchValue });
     };

  return (
      <SearchForm handleFormSubmit={handleFormSubmit } />
  );
};

export default Movies;
