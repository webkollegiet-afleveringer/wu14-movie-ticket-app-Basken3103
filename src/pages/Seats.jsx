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
      seats: ["D4", "D5"], // midlertidigt, indtil sæderne bliver dynamiske 
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
          <span className="checkout__arrow"><SlArrowDown /></span>
          <div className="seats__select-wrapper seats__select-wrapper--full">

          </div>
        </div>

        <div className="seats__row-fields">
          <div className="seats__form-group seats__form-group--half">
            <label className="seats__label">Date</label>
            <div className="seats__select-wrapper">
              <select className="seats__select" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)}>
                <option>02 Nov 2021</option>
                <option>03 Nov 2021</option>
                <option>04 Nov 2021</option>
              </select>
            </div>
          </div>

          <div className="seats__form-group seats__form-group--half">
            <label className="seats__label">Time</label>
            <div className="seats__select-wrapper">
              <select className="seats__select" value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)}>
                <option>01.00 PM</option>
                <option>04.00 PM</option>
                <option>08.00 PM</option>
              </select>
            </div>
          </div>

          {/*Mangler sass*/}
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
      <Link to='/checkout' onClick={saveBooking} className="seats__checkout-button">Checkout</Link>

      {/* Lav en funktion der gemmer biograf, tidspunkt og sæder*/}


    </>
  )
}

export default Seats