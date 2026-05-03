import { useState } from "react";
import Header from "../components/Header";
import Seat from "../components/Seat";
import "./Seats.scss";
import { Link } from "react-router-dom";
import { SlArrowDown } from "react-icons/sl";


function Seats() {
  const [selectedCinema, setSelectedCinema] = useState("Empire XXI Yogyakarta");
  const [selectedDate, setSelectedDate] = useState("02 Nov 2021");
  const [selectedTime, setSelectedTime] = useState("01.00 PM");

  function saveBooking() {
    const booking = {
      cinema: selectedCinema,
      date: selectedDate,
      time: selectedTime,
      seats: ["D4", "D5"],
    };

    localStorage.setItem("booking", JSON.stringify(booking));


  }

  return (
    <>
      <Header title="Select Seats" />
      <main className="seats-main">
        <div className="seats__form-group">
          <label className="seats__label">Cinema</label>
          <input type="text" defaultValue="Empire XXI Yogyakarta" className="checkout__input"></input>
          <div className="seats__select-wrapper seats__select-wrapper--full">

          </div>
        </div>

        <div className="seats__row-fields">
          <div className="seats__form-group seats__form-group--half">
            <label className="seats__label">Date</label>
            <input type="text" defaultValue="02 Nov 2021" className="checkout__input"></input>
            <div className="seats__select-wrapper">
            </div>
          </div>

          <div className="seats__form-group seats__form-group--half">
            <label className="seats__label">Time</label>
            <input type="text" defaultValue="01.00 PM" className="checkout__input"></input>
            <div className="seats__select-wrapper">
            </div>
          </div>


          <div className="screen">
            <div className="screen__arc"></div>
            <div className="screen__glow"></div>
          </div>

        </div>

        <div className="seat-container">


          <Seat />
          <Seat />
          <Seat />

          <Seat />
          <Seat />
          <Seat />

          <Seat />
          <Seat />
          <Seat />
          <Seat />

          <Seat />
          <Seat />
          <Seat />
          <Seat />

          <Seat />
          <Seat />
          <Seat />
          <Seat selected />

          <Seat selected />
          <Seat />
          <Seat />
          <Seat />

          <Seat reserved />
          <Seat reserved />
          <Seat reserved />
          <Seat reserved />

          <Seat reserved />
          <Seat reserved />
          <Seat reserved />
          <Seat reserved />

          <Seat reserved />
          <Seat reserved />
          <Seat reserved />
          <Seat reserved />

          <Seat reserved />
          <Seat reserved />
          <Seat reserved />
          <Seat reserved />

          <Seat />
          <Seat />
          <Seat />

          <Seat />
          <Seat />
          <Seat />
        </div>

        <div className="seat-legend">
          <div className="seat-legend__item">
            <span className="seat-legend__dot seat-legend__dot--selected"></span>
            <span className="seat-legend__text">Selected</span>
          </div>

          <div className="seat-legend__item">
            <span className="seat-legend__dot seat-legend__dot--reserved"></span>
            <span className="seat-legend__text">Reserved</span>
          </div>


          <div className="seat-legend__item">
            <span className="seat-legend__dot seat-legend__dot--available"></span>
            <span className="seat-legend__text">Available</span>

          </div>
        </div>

      </main>
      <div className="main-padding-left-right">
        <Link to='/checkout' onClick={saveBooking} className="seats__checkout-button">Checkout</Link>
      </div>





    </>
  )
}

export default Seats