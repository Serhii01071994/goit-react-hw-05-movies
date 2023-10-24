const SearchForm = ({handleFormSubmit}) => {
  return (
    <div>
      <form className="form" onSubmit={handleFormSubmit}>
        <input className="input" type="text" name="searchQuery" />
        <button className="button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
