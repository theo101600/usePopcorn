import { useState, useEffect } from "react";
const OMDb_KEY = "20b5c112";

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    function () {
      // callback?.();

      const controller = new AbortController();

      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${OMDb_KEY}&s=${query}`,
            { signal: controller.signal }
          );

          const data = await res.json();
          setMovies(data.Search);

          if (!res.ok)
            throw new Error("Something went wrong with fetching movies.");

          if (data.Response === "False") throw new Error("Movie not found");
        } catch (err) {
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }

      // handleCloseMovie();
      fetchMovies();

      return function () {
        controller.abort();
      };
    },
    [query]
  );
  return {
    movies,
    isLoading,
    error,
  };
}
