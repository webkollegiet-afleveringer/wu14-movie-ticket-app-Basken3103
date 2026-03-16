import { useEffect, useState } from "react";

function Explore() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = import.meta.env.VITE_TMDB_TOKEN;
  const baseImgUrl = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/now_playing",
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Kunne ikke hente film");
        }

        const data = await response.json();
        setMovies(data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchMovies();
  }, [token]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Fejl: {error}</p>;

  return (
    <section>
      <h1>Explore Movie</h1>

      {movies.map((movie) => (
        <article key={movie.id}>
          <img
            src={`${baseImgUrl}${movie.poster_path}`}
            alt={movie.title}
            style={{ width: "200px" }}
          />
          <h2>{movie.title}</h2>
        </article>
      ))}
    </section>
  );
}

export default Explore;