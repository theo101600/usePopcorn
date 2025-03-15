export default function NumResults({ movies }) {
  return (
    <p className="num-results">
      {!movies ? "No results found" : `Found ${movies.length} results`}
    </p>
  );
}
