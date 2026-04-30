import Header from "../components/Header"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../style/Explore.scss";
import { FaChevronLeft, FaSearch, FaStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";



function Explore() {
  const [topMovies, setTopMovies] = useState([]);
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = import.meta.env.VITE_TMDB_TOKEN
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
      <header className="explore__movie header">
        <span className="explore__icon-btn"><FaChevronLeft /></span>
        <h1 className="explore__title">Explore Movie</h1>
        <span className="explore__icon-btn"><FaSearch /></span>

      </header>


      <div className="explore__tabs main-padding-left-right">
        <button className="tab-btn tab-btn--active">Now Showing</button>
        <button className="tab-btn">Upcoming</button>
      </div>

      <div className="section-heading">
        <h2>Top Movies</h2>
        <span>See more</span>
      </div>

      <div className="movie-row movie-row__large">
        {topMovies.slice(0, 5).map((movie) => (
          <Link
            to={`/details/${movie.id}`}
            key={movie.id}
            className="movie-link"
          >
            <article className="movie-card movie-card__large main-padding-left-right">
              <img
                src={`${baseImgUrl}${movie.poster_path}`}
                alt={movie.title}
                className="movie-card__image movie-card__image__large"
              />
              <h3 className="movie-card__title">{movie.title}</h3>
              <p className="movie-card__rating">★★★★★</p>
            </article>
          </Link>
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
        <NavLink to="/" className="bottom-nav__item bottom-nav__item--active">⌂</NavLink>
        <NavLink to="/explore" className="bottom-nav__item">◉</NavLink>
        <NavLink to="/ticket" className="bottom-nav__item">🔖</NavLink>
        <NavLink to="/profile" className="bottom-nav__item">👤</NavLink>
      </nav>

    </section>
  );
}

export default Explore;