import { NavLink, useNavigation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";

import { SettingsModal } from "../";

import logoIcon from "/icons/donntu/donntu-blue-icon.png";
import logoutWhiteIcon from "/icons/nav/white/logout.png";
import bellWhiteIcon from "/icons/nav/white/bell.png";
import settingsWhiteIcon from "/icons/nav/white/settings.png";
import performanceWhiteIcon from "/icons/nav/white/performance.png";
import userWhiteIcon from "/icons/nav/white/user.png";
import calendarWhiteIcon from "/icons/nav/white/calendar.png";
import moreWhiteIcon from "/icons/nav/white/more.png";
import docsWhiteIcon from "/icons/nav/white/docs.png";

import logoutBlueIcon from "/icons/nav/blue/logout.png";
import bellBlueIcon from "/icons/nav/blue/bell.png";
import settingsBlueIcon from "/icons/nav/blue/settings.png";
import performanceBlueIcon from "/icons/nav/blue/performance.png";
import userBlueIcon from "/icons/nav/blue/user.png";
import calendarBlueIcon from "/icons/nav/blue/calendar.png";
import subscribeBlueIcon from "/icons/nav/blue/calendar.png";
import moreBlueIcon from "/icons/nav/blue/more.png";
import docsBlueIcon from "/icons/nav/blue/docs.png";

import logoutBlackIcon from "/icons/nav/black/logout.png";
import bellBlackIcon from "/icons/nav/black/bell.png";
import settingsBlackIcon from "/icons/nav/black/settings.png";
import performanceBlackIcon from "/icons/nav/black/performance.png";
import userBlackIcon from "/icons/nav/black/user.png";
import calendarBlackIcon from "/icons/nav/black/calendar.png";
import moreBlackIcon from "/icons/nav/black/more.png";
import docsBlackIcon from "/icons/nav/black/docs.png";

import logoutRedIcon from "/icons/nav/red/logout.png";

import { ConfirmLogoutModal } from "@/features/auth";

import "./DashboardHeader.css";


export function DashboardHeader() {
  const { t } = useTranslation("dashboard");
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigation = useNavigation();
  
  function handleShowSettingsModal() {
    setShowSettingsModal(true)
  }

  function handleCloseSettingsModal() {
    setShowSettingsModal(false)
  }

  function handleShowLogoutModal() {
    setShowLogoutModal(true)
  }

  function handleCloseLogoutModal() {
    setShowLogoutModal(false)
  }

  return (
    <header className="header">
      <nav className="dashboard-nav header-nav">
        <div class="header-logo">
          <img className="header-logo-icon" src={logoIcon} />
          {/* <span className="header-logo-text">ДонНТУ</span> */}
        </div>

        <section className="header-tabs">
          <ul className="dashboard-nav-list">
            <li className="dashboard-nav-button">
              <NavLink to="/profile">
                <div className="header-nav-button">
                  <img src={userBlueIcon}/>
                  <span>{t("dashboard:nav.profile")}</span>
                </div>
              </NavLink>
            </li>
            <li className="dashboard-nav-button">
              <NavLink to="/schedule">
                <div className="header-nav-button">
                  <img src={calendarBlueIcon}/>
                  <span>{t("dashboard:nav.schedule")}</span>
                </div>
              </NavLink>
            </li>
            <li className="dashboard-nav-button">
              <NavLink to="/performance">
                <div className="header-nav-button">
                  <img src={performanceBlueIcon}/>
                  <span>{t("dashboard:nav.performance")}</span>
                </div>
              </NavLink>
            </li>
            <li className="dashboard-nav-button">
              <NavLink to="/docs">
                <div className="header-nav-button">
                  <img src={docsBlueIcon}/>
                  <span>{t("dashboard:nav.docs")}</span>
                </div>
              </NavLink>
            </li>
            {/* <li className="dashboard-nav-button">
              <NavLink to="/subscribe">
                <div className="header-nav-button">
                  <img src={subscribeBlueIcon}/>
                  <span>{t("dashboard:nav.subscribe")}</span>
                </div>
              </NavLink>
            </li> */}
          </ul>
        </section>

        <section className="header-options">
          <ul className="dashboard-nav-options-list">
            <li className="dashboard-nav-button">
              <button className="header-nav-button disabled">
                <img src={bellBlueIcon}/>
              </button>
            </li>
            <li className="dashboard-nav-button">
              <button className="header-nav-button" onClick={handleShowSettingsModal}>
                <img src={settingsBlueIcon}/>
              </button>
            </li>
            <li className="dashboard-nav-button">
              <button className="header-nav-button" onClick={handleShowLogoutModal}>
                <img src={logoutBlueIcon}/>
              </button>
            </li>
          </ul>
        </section>
      </nav>

      {showSettingsModal && <SettingsModal onClose={handleCloseSettingsModal} />}
      {showLogoutModal && <ConfirmLogoutModal onClose={handleCloseLogoutModal} />}
    </header>
  );
}