import { useEffect, useState } from "react";



function Explore() {
  const [topMovies, setTopMovies] = useState([]);
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = import.meta.env.VITE_TMDB_TOKEN
  console.log("TMDB Token:", token); // Debugging: Check if the token is loaded correctly
  const baseImgUrl = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    async function fetchMovies() {
      try {
        const [topResponse, recommendedResponse] = await Promise.all([
          fetch("https://api.themoviedb.org/3/movie/now_playing", {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
          }),
          fetch("https://api.themoviedb.org/3/movie/top_rated", {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
          }),
        ]);


        if (!topResponse.ok || !recommendedResponse.ok) {
          throw new Error("Kunne ikke hente film");
        }

        const topData = await topResponse.json();
        const recommendedData = await recommendedResponse.json();

        setTopMovies(topData.results);
        setRecommendedMovies(recommendedData.results);
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

      <div>
        <h2>Top Movies</h2>
        {topMovies.slice(0, 2).map((movie) => (
          <article key={movie.id}>
            <img
              src={`${baseImgUrl}${movie.poster_path}`}
              alt={movie.title}
              style={{ width: "200px" }}
            />
            <h3>{movie.title}</h3>
          </article>
        ))}
      </div>

      <div>
        <h2>Recommended</h2>
        <div style={{ display: "flex", gap: "12px", overflowX: "auto" }}>
          {recommendedMovies.slice(0, 4).map((movie) => (
            <article key={movie.id}>
              <img
                src={`${baseImgUrl}${movie.poster_path}`}
                alt={movie.title}
                style={{ width: "120px", borderRadius: "12px" }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Explore;