import { NavLink } from "react-router-dom";
import "./DashboardNavigation.css";

function DashboardNavigation() {
  return (
    <header className="header">
      <nav className="header-nav">
        <section className="header-tabs">
          <ul className="header-nav-list">
            <li className="header-nav-button">
              <NavLink to="/profile">Профіль</NavLink>
            </li>
            <li className="header-nav-button">
              <NavLink to="/subscribe">Запис</NavLink>
            </li>
            <li className="header-nav-button">
              <NavLink to="/success">Успішність</NavLink>
            </li>
            <li className="header-nav-button">
              <NavLink to="/docs">Звіти</NavLink>
            </li>
          </ul>
        </section>

        <section className="header-options">
          <ul className="header-nav-list">
            <li className="header-nav-button">
              <NavLink to="/logout">Вийти</NavLink>
            </li>
          </ul>
        </section>
      </nav>
    </header>
  );
}

export default DashboardNavigation;
