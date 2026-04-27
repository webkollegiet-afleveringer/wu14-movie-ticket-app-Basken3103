import { useEffect, useState } from "react";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import "../style/SavedPlan.scss";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosRemove } from "react-icons/io";
import { IoIosAddCircle } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { FiTrash } from "react-icons/fi";

function SavedPlan() {
  const [comingSoonMovie, setComingSoonMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = import.meta.env.VITE_TMDB_TOKEN
  const baseImgUrl = "https://image.tmdb.org/t/p/w500";

  const cinemas = [
    {
      id: 1,
      genre: "Action",
      name: "No Time To Die",
      time: "2h 43m",
      rating: "5,0",
      image:
        "https://dummyimage.com/80x80/ffffff/cc0000&text=VIVA",
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

  /*Må få Henrik til at hjælpe mig med api delen, jeg ved godt hvad jeg skal, men hvordan er en anden historie*/

  return (
    <section className="saved-plan">
      <Header title="Saved Plan" />

      {/*Overskrift 1*/}
      <h1>1. 02 November 2021</h1>

      {/*Input felterne*/}
      <div className="saved-plan__form">
        <div className="saved-plan__field">
          <label>Cinema</label>
          <div className="saved-plan__input-wrapper">
            <input type="text" defaultValue="EbonyLife"></input>
            <span className="saved-plan__arrow"><RiArrowDropDownLine /></span>
          </div>
        </div>
      </div>

      {/* Hvorfor kan man ikke skrive tal?*/}
      <div className="saved-plan__form">
        <div className="saved-plan__field">
          <label>Date</label>
          <div className="saved-plan__input-wrapper">
            <input type="number" defaultValue="02 Nov 2021"></input>
            <span className="saved-plan__arrow"><RiArrowDropDownLine /></span>
          </div>
        </div>
      </div>

      <div className="saved-plan__form">
        <div className="saved-plan__field">
          <label>Time</label>
          <div className="saved-plan__input-wrapper">
            <input type="number" defaultValue="01.00 PM"></input>
            <span className="saved-plan__arrow"><RiArrowDropDownLine /></span>
          </div>
        </div>
      </div>



      <div className="saved-plan__form">
        <div className="saved-plan__field">
          <label>Seats</label>
          <div className="saved-plan__input-wrapper">
            <input type="" defaultValue="C4, C5, C6"></input>
            <span className="saved-plan__arrow"><RiArrowDropDownLine /></span>
          </div>
        </div>
      </div>

      <div className="saved-plan__form">
        <div className="saved-plan__field">
          <label>Person</label>
          <div className="saved-plan__input-wrapper">
            <input type="" defaultValue=""></input>
            <span className="saved-plan__minus"><IoIosRemove /></span>
            <span>2</span>
            <span className="saved-plan__plus"><IoIosAddCircle /></span>
          </div>
        </div>
      </div>

      <div className="saved-plan__footer">
        <button className="saved-plan__checkout">Checkout</button>
        <button className="saved-plan__delete"><FiTrash /></button>
      </div>

      <h1>2. 17 December 2021</h1>

      <nav className="bottom-nav">
        <NavLink to="/" className="bottom-nav__item bottom-nav__item--active">⌂</NavLink>
        <NavLink to="/explore" className="bottom-nav__item">◉</NavLink>
        <NavLink to="/ticket" className="bottom-nav__item">🔖</NavLink>
        <NavLink to="/profile" className="bottom-nav__item">👤</NavLink>
      </nav>
    </section>
  )
}

export default SavedPlan



