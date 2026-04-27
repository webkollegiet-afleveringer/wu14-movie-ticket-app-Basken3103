import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import "../style/Details.scss"



function Details() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = import.meta.env.VITE_TMDB_TOKEN;
  const baseImgUrl = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}`,
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
          },

        );

        if (!response.ok) {
          throw new Error("Kunne ikke hente filmens detaljer");
        }

        const data = await response.json();
        setMovie(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchMovieDetails();
  }, [id, token]);
  if (loading) {
    return <p className="details__message">Loading...</p>;
  }

  if (error) {
    return <p className="details__message">Fejl: {error}</p>;
  }

  function saveLocalStorage() {
    localStorage.setItem("savedMoviedata", JSON.stringify(movie))
  }

  return (
    <section className="details">
      <header className="details__header">
        <button className="details__icon-button">←</button>
        <h1 className="details__title">Details Movie</h1>
        <button className="details__icon-button">🔖</button>
      </header>

      <div className="details__poster-wrapper">
        <img
          className="details__poster"
          src={`${baseImgUrl}${movie.poster_path}`}
          alt={movie.title}
        />
      </div>

      <div className="details__content">
        <h2 className="details__movie-title">{movie.title}</h2>

        <div className="details__meta">
          <p className="details__director">
            Director: Unknown
          </p>
          <p className="details__rating">★ {movie.vote_average?.toFixed(1)}</p>
        </div>

        <div className="details__tags">
          {movie.genres?.slice(0, 2).map((genre) => (
            <span className="details__tag" key={genre.id}>
              {genre.name}
            </span>
          ))}

          <span className="details__tag">
            {movie.runtime ? `${Math.floor(movie.runtime / 60)
              .toString()
              .padStart(2, "0")}h ${String(movie.runtime % 60).padStart(2, "0")}m` : "N/A"}
          </span>
        </div>

        <div className="details__synopsis-block">
          <h3 className="details__subtitle">Synopsis</h3>
          <p className="details__synopsis">
            {movie.overview}
          </p>
        </div>

        <Link to='/seats' onClick={saveLocalStorage} className="details__button">Book Ticket</Link>

      </div>
    </section>
  );
}

export default Details;