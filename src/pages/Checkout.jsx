import Header from "../components/Header";
import "../style/Checkout.scss"
import { FiChevronDown } from "react-icons/fi";
import { FaRegCircle } from "react-icons/fa";

function Checkout() {

  return (
    <section className="checkout">
      <Header title="Checkout" />

      {/* Payment Method*/}
      <div className="checkout__section">
        <div className="checkout__section-header">
          <h2 className="checkout__title">Payment Method</h2>
          <span className="checkout__change">Change</span>
        </div>

        <div className="checkout__card">
          <div className="checkout__card-top">
            <div className="checkout__card-icons">
              <span className="checkout__circle checkout__circle --red"><FaRegCircle /></span>
              <span className="checkout__circle checkout__circle --yellow"><FaRegCircle /></span>
            </div>

            <div className="checkout__balance">
                <p className="checkout__balance-label">Balance</p>
                <h3 className="checkout__balance-value">$120,580,00</h3>
            </div>
          </div>

          <div className="checkout__card-bottom">
            <div>
              <p className="checkout__label">Card Holder</p>
              <p className="checkout__value">Miles Morales</p>
            </div>

            <p className="checkout__card-number">
               **** **** **** 51446
            </p>
          </div>
        </div>
      </div>

      {/* Payment Details */}
      <div className="checkout__section">
        <h2 className="checkout__title">Payment Details</h2>

        <div className="checkout__field">
          <label className="checkout__label">Your Email</label>
          <input type="email" defaultValue="Milesmorales@gmail.com" className="checkout__input"></input>
        </div>

        <div className="checkout__field">
          <label className="checkout__label">Cardholder Name</label>
          <input type="text" defaultValue="Miles Morales" className="checkout__input"></input>
        </div>

        {/* Nedereste input felt virker ikke, skal have fundet ud af hvorfor */}
        <div className="checkout__field">
          <label className="checkout__label">Card Number</label>
          <input type="text" defaultValue="**** **** **** 51446" className="checkout__input"></input>
        </div>

        <div className="checkout__row">
          <div className="checkout__field">
            <label className="checkout__label">Date</label>
            <div className="checkout__input-wrapper">
              <input type="text" defaultValue= "02 Nov 2021" className="checkout__input"></input>
              <span className="checkout__arrow"><FiChevronDown /></span>
            </div>
          </div>
        </div>

        <div className="checkout__field">
          <label className="checkout__label">CVV</label>
          <input type="text" defaultValue="123" className="checkout__input"/>
        </div>
      </div>

      {/* Button */}
      <button className="checkout__button">
        <span className="checkout__button-text">Pay Now</span>
        <span className="checkout__divider"></span>
        <span className="checkout__price">$99.8</span>
      </button>      
    </section>
  )
}

export default Checkout