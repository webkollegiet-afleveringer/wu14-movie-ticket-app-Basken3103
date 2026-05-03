import { Link } from "react-router-dom";
import Header from "../components/Header";
import "../style/Ticket.scss";


function Ticket() {

  return (
    <section className="ticket">
      <Header title="E-ticket" />

      <div className="ticket__instruction main-padding-left-right">
        <h2 className="ticket__instruction-title">Instruction</h2>
        <p className="ticket__instruction-text">
          Come to the cinema, show and scan the<br />
          barcode to the space provided. Continue to<br />
          comply with health protocols.<br />
        </p>
      </div>

      <div className="ticket__card main-padding-left-right">
        <div className="ticket__info">
          <div className="ticket__row">
            <h3 className="ticket__movie">Film: Shang-Chi</h3>
            <span className="ticket__type">e-ticket</span>
          </div>
        </div>
      </div>

      <div className="ticket__grid main-padding-left-right">
        <div className="ticket__item">
          <span className="ticket__label">Date</span>
          <p className="ticket__value">06/09/2021</p>
        </div>

        <div className="ticket__item">
          <span className="ticket__label">Seats</span>
          <p className="ticket__value">c4, c5</p>
        </div>

        <div className="ticket__item">
          <span className="ticket__label">Location</span>
          <p className="ticket__value">Viva Cinema</p>
        </div>

        <div className="ticket__item">
          <span className="ticket__label">Time</span>
          <p className="ticket__value">01.00 PM</p>
        </div>

        <div className="ticket__item">
          <span className="ticket__label">Payment</span>
          <p className="ticket__value">Successful</p>
        </div>

        <div className="ticket__item">
          <span className="ticket__label">Order</span>
          <p className="ticket__value">1904566</p>
        </div>
      </div>

      <div className="ticket__divider"></div>


      <div className="ticket__barcode-section main-padding-left-right">
        <img src="https://bwipjs-api.metafloor.com/?bcid=code128&text=1904566&scale=3&rotate=N&includetext" alt="Barcode" className="ticket__barcode-img" />
      </div>

      <Link to='/download' className="ticket__download-btn main-padding-left-right">Download E-ticket</Link>
    </section>
  )
}

export default Ticket