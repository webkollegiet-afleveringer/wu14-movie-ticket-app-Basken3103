import Header from "../components/Header"
import "../style/Settings.scss"
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";


function Settings() {

  return (
    <section className="settings">
      <Header title="Settings" />

      {/*Profile*/}
      <div className="settings__profile">
        <div className="settings__avatar-containter">
          <img src="https://i.pravatar.cc/100?img=12" alt="Miles Morales" className="settings__avatar" />
        </div>
      </div>

      <div className="settings__profile-info">
        <h2 className="settings__name">Miles Morales</h2>
        <p className="settings__label">Film Hunter</p>
        <span className="settings__arrow"><IoIosArrowForward /></span>

        <div className="settings__divider-line"></div>
      </div>

      {/*Account*/}
      <div className="settings__section">
        <h2 className="settings__section-title">Account</h2>
        <div class="icon-box icon-box--personal">
          <h3>Personal Data</h3>
          <svg class="icon-box__icon" viewBox="0 0 24 24">...</svg> {/*Farven bliver synlig når der kommer design på, sær flere på senere*/}
        </div>

        <div>
          <h3>Email & Payment</h3>
        </div>
      </div>

      {/*Går i gang med design nu*/}
    </section>
  )
}

export default Settings