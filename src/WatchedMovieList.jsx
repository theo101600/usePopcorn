import WatchedMovie from "./WatchedMovie";
export default function WatchedMovieList({
  watched,
  handleSelectMovie,
  onDeleteWatched,
}) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie
          key={movie.imdbID}
          movie={movie}
          handleSelectMovie={handleSelectMovie}
          onDeleteWatched={onDeleteWatched}
        />
      ))}
    </ul>
  );
}
