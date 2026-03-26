import { useState } from "react";
import Header from "../components/Header";
import Seat from "../components/Seat";


function Seats() {
  const[selectedCinema, setSelectedCinema] = useState("Empire XXI Yogyakarta");
  const [selectedDate, setSelectedDate] = useState("02 Nov 2021");
  const [selectedTime, setSelectedTime] = useState("01.00 PM");

  return (
    <> 
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
    </> /* </Fragment> */
  )
}

export default Seats