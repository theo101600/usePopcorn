import { useState } from "react";
import ListBox from "./ListBox";
import WatchedBox from "./WatchedBox";

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export default function Body({ movies, watched }) {
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);

  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));
  return (
    <main className="main">
      <ListBox isOpen1={isOpen1} setIsOpen1={setIsOpen1} movies={movies} />
      <WatchedBox
        isOpen2={isOpen2}
        setIsOpen2={setIsOpen2}
        watched={watched}
        avgImdbRating={avgImdbRating}
        avgUserRating={avgUserRating}
        avgRuntime={avgRuntime}
      />
    </main>
  );
}
