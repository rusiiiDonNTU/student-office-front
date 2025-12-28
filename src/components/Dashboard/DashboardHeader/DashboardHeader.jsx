import { NavLink } from "react-router-dom";
import logoIcon from "/donntu-white-logo.png";
import bellIcon from "/icons/nav/bell.png";
import settingsIcon from "/icons/nav/settings.png";
import logoutIcon from "/icons/nav/logout.png";
import "./DashboardHeader.css";
import { useTranslation } from "react-i18next";

function DashboardHeader() {
  const { t } = useTranslation("dashboard");
  
  return (
    <header className="header">
      <nav className="dashboard-nav">
        {/* <div class="header-logo">
          <img className="header-logo-icon" src={logoIcon} />
          <span className="header-logo-text">ДонНТУ</span>
        </div> */}

        <section className="header-tabs">
          <ul className="dashboard-nav-list dashboard-nav-tab-list">
            <li className="dashboard-nav-header-button">
              <NavLink to="/profile">Профіль</NavLink>
            </li>
            <li className="dashboard-nav-header-button">
              <NavLink to="/subscribe">Запис</NavLink>
            </li>
            <li className="dashboard-nav-header-button">
              <NavLink to="/success">Успішність</NavLink>
            </li>
            <li className="dashboard-nav-header-button">
              <NavLink to="/schedule">Розклад</NavLink>
            </li>
            <li className="dashboard-nav-header-button">
              <NavLink to="/docs">Звіти</NavLink>
            </li>
          </ul>
        </section>

        <section className="header-options">
          <ul className="dashboard-nav-list">
            <li className="dashboard-nav-header-button">
              <button>
                <img src={bellIcon}/>
              </button>
            </li>
            <li className="dashboard-nav-header-button">
              <button>
                <img src={settingsIcon}/>
              </button>
            </li>
            <li className="dashboard-nav-header-button">
              <NavLink to="/logout">
                <img src={logoutIcon}/>
              </NavLink>
            </li>
          </ul>
        </section>
      </nav>
    </header>
  );
}

export default DashboardHeader;
