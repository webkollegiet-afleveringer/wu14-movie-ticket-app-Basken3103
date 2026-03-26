import { useState } from "react";
import Header from "../components/Header";
import Seat from "../components/Seat";


function Seats() {
  const[selectedCinema, setSelectedCinema] = useState("Empire XXI Yogyakarta");
  const [selectedDate, setSelectedDate] = useState("02 Nov 2021");
  const [selectedTime, setSelectedTime] = useState("01.00 PM");

/*   const [seats, setSeats] = useState([
    { id: 1, row: 1, status: "availbale" },
    { id: 2, row: 1, status: "available" },
    { id: 3, row: 1, status: "available" },

    { id: 4, row: 1, status: "available" },
    { id: 5, row: 1, status: "available" },
    { id: 6, row: 1, status: "available" },

    { id: 7, row: 2, status: "available" },
    { id: 8, row: 2, status: "available" },
    { id: 9, row: 2, status: "available" },
    { id: 10, row: 2, status: "available" },

    { id: 11, row: 2, status: "available" },
    { id: 12, row: 2, status: "available" },
    { id: 13, row: 2, status: "available" },
    { id: 14, row: 2, status: "available" },

    { id: 15, row: 3, status: "available" },
    { id: 16, row: 3, status: "available" },
    { id: 17, row: 3, status: "available" },
    { id: 18, row: 3, status: "selected" },

    { id: 19, row: 3, status: "selected" },
    { id: 20, row: 3, status: "available" },
    { id: 21, row: 3, status: "available" },
    { id: 22, row: 3, status: "available" },

    { id: 23, row: 4, status: "reserved" },
    { id: 24, row: 4, status: "reserved" },
    { id: 25, row: 4, status: "reserved" },
    { id: 26, row: 4, status: "reserved" },

    { id: 27, row: 4, status: "reserved" },
    { id: 28, row: 4, status: "reserved" },
    { id: 29, row: 4, status: "reserved" },
    { id: 30, row: 4, status: "reserved" },

    { id: 31, row: 5, status: "reserved" },
    { id: 32, row: 5, status: "reserved" },
    { id: 33, row: 5, status: "reserved" },
    { id: 34, row: 5, status: "reserved" },

    { id: 35, row: 5, status: "reserved" },
    { id: 36, row: 5, status: "reserved" },
    { id: 37, row: 5, status: "reserved" },
    { id: 38, row: 5, status: "reserved" },

    { id: 39, row: 6, status: "available" },
    { id: 40, row: 6, status: "available" },
    { id: 41, row: 6, status: "available" },

    { id: 42, row: 6, status: "available" },
    { id: 43, row: 6, status: "available" },
    { id: 44, row: 6, status: "available" },
  ]);

   function handleSeatClick(clickedSeat) {
    if (clickedSeat.status === "reserved") return;

    setSeats((prevSeats) =>
      prevSeats.map((seat) =>
        seat.id === clickedSeat.id
          ? {
              ...seat,
              status: seat.status === "selected" ? "available" : "selected",
            }
          : seat
      )
    );
  } */

  return (
    <> {/* <Fragment> */}
 {/*      <header className="seats__header">
        <button className="seats__back-button">←</button>
        <h1 className="seats__title">Select Seats</h1>
        <div className="seats__spacer"></div>
      </header> */}

      <Header title="Select Seats" />

      <div className="seats__form-group">
        <label className="seats__label">Cinema</label>
        <div className="seats__select-wrapper seats__select-wrapper--full">
          <select
          className="seats__select"
          value={selectedCinema}
          onChange={(e) => setSelectedCinema(e.target.value)}
          >
            <option>Empire XXI Yogyakarta</option>
            <option>Viva Cinema</option>
            <option>EbonyLife Cinema</option>
          </select>
        </div>
      </div>

      <div className="seats__row-fields">
        <div className="seats__form-group seats__form-group--half">
          <label className="seats__label">Date</label>
          <div className="seats__select-wrapper">
            <select
             className="seats__select"
             value={selectedDate}
             onChange={(e) => setSelectedDate(e.target.value)}
            
            >
              <option>02 Nov 2021</option>
              <option>03 Nov 2021</option>
              <option>04 Nov 2021</option>
            </select>
          </div>
        </div>

        <div className="seats__form-group seats__form-group--half">
          <label className="seats__label">Time</label>
          <div className="seats__select-wrapper">
            <select
              className="seats__select"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
            
            >
              <option>01.00 PM</option>
              <option>04.00 PM</option>
              <option>08.00 PM</option>
            </select>
          </div>
        </div>

        <div className="screen">
        <div className="screen__arc"></div>
        <div className="screen__glow"></div>
      </div>


        

      </div>


      <Seat />
      <Seat />
      <Seat />
      <Seat selected />
      <Seat />
      <Seat reserved />
      <Seat />
     
      
    </> /* </Fragment> */
  )
}

export default Seats