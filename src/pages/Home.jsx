import { useEffect, useState } from "react";
import "../style/Home.scss";

function Home() {
  const [comingSoonMovie, setComingSoonMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = import.meta.env.VITE_TMDB_TOKEN
  const baseImgUrl = "https://image.tmdb.org/t/p/w500";

  const cinemas = [
    {
      id: 1,
      name: "Viva Cinema",
      distance: "5,2 Kilometers",
      closingTime: "Closed 10.00 PM",
      rating: "4,9",
      image:
        "https://dummyimage.com/80x80/ffffff/cc0000&text=VIVA",
    },
      {
      id: 2,
      name: "EbonyLife Cinema",
      distance: "6,5 Kilometers",
      closingTime: "Closed 09.00 PM",
      rating: "5,0",
      image:
        "https://dummyimage.com/80x80/000000/ffffff&text=EL",
    },
  ];

  useEffect(() => {
    async function fetchComingSoonMovie() {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/upcoming",
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Kunne ikke hente kommende film");
        }

        const data = await response.json();
        setComingSoonMovie(data.results[0]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchComingSoonMovie();
  }, [token]);

  if (loading) {
    return <p className="home__message">Loading...</p>;
  }

  if (error) {
    return <p className="home__message">Fejl: {error}</p>;
  }
    
  
  return (
     <section className="home">
      <header className="home__header">
        <div className="home__welcome">
          <p className="home__greeting">Welcome Back,</p>
          <h1 className="home__username">Osysyy</h1>
        </div>

        <div className="home__avatar-wrapper">
          <img
            className="home__avatar"
            src="https://i.pravatar.cc/100?img=12"
            alt="User avatar"
          />
        </div>
      </header>

      <div className="home__search">
        <span className="home__search-icon">⌕</span>
        <input
          className="home__search-input"
          type="text"
          placeholder="Search your favourite movie"
        />
      </div>

      <section className="home__section">
        <h2 className="home__section-title">Coming Soon</h2>

        {comingSoonMovie && (
          <article className="home__featured-card">
            <img
              className="home__featured-image"
              src={`${baseImgUrl}${comingSoonMovie.backdrop_path}`}
              alt={comingSoonMovie.title}
            />

            <div className="home__featured-content">
              <h3 className="home__featured-title">
                {comingSoonMovie.title}
              </h3>
              <p className="home__featured-date">
                {comingSoonMovie.release_date}
              </p>
            </div>
          </article>
        )}
      </section>

      <section className="home__section">
        <div className="home__section-header">
          <h2 className="home__section-title">Cinema Near You</h2>
          <span className="home__see-all">See all</span>
        </div>

        <div className="home__cinema-list">
          {cinemas.map((cinema) => (
            <article className="cinema-card" key={cinema.id}>
              <img
                className="cinema-card__image"
                src={cinema.image}
                alt={cinema.name}
              />

              <div className="cinema-card__content">
                <p className="cinema-card__distance">📍 {cinema.distance}</p>
                <h3 className="cinema-card__title">{cinema.name}</h3>
                <p className="cinema-card__time">{cinema.closingTime}</p>
              </div>

              <div className="cinema-card__rating">
                <span className="cinema-card__star">★</span>
                <span>{cinema.rating}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <nav className="bottom-nav">
        <span className="bottom-nav__item bottom-nav__item--active">⌂</span>
        <span className="bottom-nav__item">◉</span>
        <span className="bottom-nav__item">🔖</span>
        <span className="bottom-nav__item">👤</span>
      </nav>
    </section>

       
  );
}

export default Home