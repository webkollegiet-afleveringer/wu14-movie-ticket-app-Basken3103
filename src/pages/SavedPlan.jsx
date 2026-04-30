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
  const token = import.meta.env.VITE_TMDB_TOKEN
  const baseImgUrl = "https://image.tmdb.org/t/p/w500"; /*Hvorfor kan billedet ikke hentes?*/

  const [movieData, setMovieData] = useState(JSON.parse(localStorage.getItem("savedMovieData")))
  console.log(movieData)

  return (
    <section className="saved-plan main-padding-left-right">
      <Header title="Saved Plan" />

      {/*Overskrift 1*/}
      <h1>1. 02 November 2021</h1>

      <h5>{movieData?.genres[0].name}</h5>
      <h3>{movieData?.title}</h3>
      <h5>{movieData?.runtime}</h5>
      <h4>{/*rating*/}</h4>
      {/*Venter med billedet til stylingen er på plads*/}

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

      <h5>{movieData?.genres[0].name}</h5>
      <h3>{movieData?.title}</h3>
      <h5>{movieData?.runtime}</h5>
      <h4>{/*rating*/}</h4>
      {/*Venter med billedet til stylingen er på plads*/}

      <h5>Cinema</h5>

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



