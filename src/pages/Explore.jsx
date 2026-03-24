import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../style/Explore.scss";


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

  if (loading) return <p className="explore-message">Loading...</p>;
  if (error) return <p className="explore-message">Fejl: {error}</p>;

  return (
    <section className="explore">
      <header className="explore__header">
        <button className="icon-btn">←</button>
        <h1 className="explore__title">Explore Movie</h1>
        <button className="icon-btn">🔍</button>
      </header>

      <div className="explore__tabs">
        <button className="tab-btn tab-btn--active">Now Showing</button>
        <button className="tab-btn">Upcoming</button>
      </div>

      <div className="section-heading">
        <h2>Top Movies</h2>
        <span>See more</span>
      </div>


      <div className="movie-row movie-row--large">
        {topMovies.slice(0, 2).map((movie) => (
          <article className="movie-card movie-card--large" key={movie.id}>
            <img
              src={`${baseImgUrl}${movie.poster_path}`}
              alt={movie.title}
              className="movie-card__image movie-card__image--large"
            />
            <h3 className="movie-card__title">{movie.title}</h3>
            <p className="movie-card__rating">★★★★★</p>
          </article>
        ))}
      </div>

      <div className="section-heading">
        <h2>Recommended</h2>
        <span>See more</span>
      </div>

      <div className="movie-row movie-row--small">
        <div style={{ display: "flex", gap: "12px", overflowX: "auto" }}>
          {recommendedMovies.slice(0, 3).map((movie) => (
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

      <nav className="bottom-nav">
        <span>⌂</span>
        <span className="bottom-nav__active">◉</span>
        <span>🔖</span>
        <span>👤</span>
      </nav>
    </section>
  );
}

export default Explore;