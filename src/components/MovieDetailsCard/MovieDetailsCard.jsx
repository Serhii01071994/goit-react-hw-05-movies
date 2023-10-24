import { filmposter } from 'servises/api';

export const MovieDetailsCard = ({ moviesDetails }) => {
  return (
    <div className="movie-deteils">
      <div className="poster">
        <img
          src={filmposter(moviesDetails?.poster_path)}
          alt={moviesDetails?.original_title}
          width={300}
        />
      </div>
      <div className="details">
        <h1 className="title">
          {moviesDetails?.original_title} (
          {moviesDetails?.release_date.slice(0, 4)})
        </h1>
        <p className="text">
          User score: {Math.round(moviesDetails?.vote_average * 10)}%
        </p>
        <h2 className="under-title">Overview</h2>
        <p className="text">{moviesDetails?.overview}</p>
        <h2 className="under-title">Genres</h2>
        <p className="text">
          {moviesDetails?.genres.map(genre => (
            <span key={genre.id}>{genre.name} </span>
          ))}
        </p>
      </div>
    </div>
  );
};
