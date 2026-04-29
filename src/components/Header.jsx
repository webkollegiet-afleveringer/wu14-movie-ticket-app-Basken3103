import { Link } from "react-router-dom";
import "./Header.scss";

export default function Header({ title = "", rightIcon = null }) {
  return (
    <header className="header">
      <Link to={-1} className="header__back-button">←</Link>
      <h1 className="header__title">{title}</h1>
      <div className="header__right-side">
        {rightIcon ? rightIcon : <div className="header__spacer" />}
      </div>
    </header>
  );
}

