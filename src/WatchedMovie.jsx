export default function WatchedMovie({
  movie,
  handleSelectMovie,
  onDeleteWatched,
}) {
  return (
    <li key={movie.imdbID}>
      <img
        src={movie.poster}
        alt={`${movie.title} poster`}
        onClick={() => handleSelectMovie(movie.imdbID)}
      />
      <h3 onClick={() => handleSelectMovie(movie.imdbID)}>{movie.title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.runtime} min</span>
        </p>
        <button
          className="btn-delete"
          onClick={() => onDeleteWatched(movie.imdbID)}
        >
          X
        </button>
      </div>
    </li>
  );
}
