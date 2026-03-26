import { Link } from "react-router-dom";
import "./Header.scss";

export default function Header({ title = ""}) {

    return (
     <header className="header">
        <Link to={-1} className="header__back-button">←</Link>
        <h1 className="header__title">{title}</h1>
      </header>
    )
}

