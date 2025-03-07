import WatchedMovieList from "./WatchedMovieList";
import WatchedSummary from "./WatchedSummay";

export default function WatchedBox({
  isOpen2,
  setIsOpen2,
  watched,
  avgImdbRating,
  avgRuntime,
  avgUserRating,
}) {
  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? "–" : "+"}
      </button>
      {isOpen2 && (
        <>
          <WatchedSummary
            watched={watched}
            avgImdbRating={avgImdbRating}
            avgRuntime={avgRuntime}
            avgUserRating={avgUserRating}
          />
          <WatchedMovieList watched={watched} />
        </>
      )}
    </div>
  );
}
