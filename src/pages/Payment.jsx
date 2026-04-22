import Header from "../components/Header"
import "../style/Payment.scss"
import { FiChevronDown } from "react-icons/fi";
import { FaRegCircle } from "react-icons/fa";


function Payment() {

  return (
    <section className="payment">
      <Header title="Checkout" />

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

      <div className="payment__section">
        <h2 className="payment__title">Payment Details</h2>
      </div>

      <div className="payment__field">
        <label className="payment__label">Your Email</label>
        <input type="email" defaultValue="Milesmorales@gmail.com" className="checkout__input"></input>
      </div>

      <label className="payment__label">Cardholder Name</label>

      <div className="payment__sheet">
        <div className="payment__success-icon">
          <span className="payment__success-check">✓</span>
        </div>
      </div>

      <h2 className="payment__success-title">Your payment was successful</h2>

      <p className="payment__succes-text">
        Adele is a Scottish heiress whose extremely wealthy family owns estates
        and grounds. When she was a teenager. Read More
      </p>

      <button className="payment__button">See E-Ticket</button>
    </section>
  )
}

export default Payment