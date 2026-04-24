import Header from "../components/Header";
import "../style/Download.scss";
import { FaDownload } from "react-icons/fa";


function Download() {

  return (
    <section className="download">
      <Header title="E-ticket" />

      <div className="download__instruction">
        <h2 className="download__instruction-title">Instruction</h2>
        <p className="ticket__instruction-text">
          Come to the cinema, show and scan the<br />
          barcode to the space provided. Continue to<br />
          comply with health protocols.<br />
        </p>
      </div>

      <div className="ticket__card">
        <div className="ticket__info">
          <div className="ticket__row">
            <h3 className="ticket__movie">Film: Shang-Chi</h3>
            <span className="ticket__type">e-ticket</span>
          </div>
        </div>
      </div>

      <div className="ticket__grid">
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

      <div className="download__sheet">
        <div className="download__succes-icon">
          <div className="download__circle">
            <FaDownload className="download__check" />
          </div>
        </div>
      </div>

      <h2 className="download__success-title">Your ticket has been downloaded</h2>

      <p className="download__success-text">
        Adele is a Scottish heiress whose extremely wealthy family owns estates
        and grounds. When she was a teenager. Read More
      </p>

      <button className="download__button">Back To Home</button>
    </section>
  )
}

export default Download