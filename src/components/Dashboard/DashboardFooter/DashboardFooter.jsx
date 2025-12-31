import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./DashboardFooter.css";

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

function DashboardFooter() {
  const { t } = useTranslation("dashboard");
  const [showMore, setShowMore] = useState(false);

  function handleHideMore() {
    if (showMore === true) setShowMore(false)
  }

  function handleShowMore() {
    setShowMore(prev => !prev);
  }

  return (
    <>
      {showMore && <div id="footer-more-background" onClick={handleHideMore}>
          <div className="footer-more">
            <nav className="dashboard-nav">
              <section className="footer-buttons-vertical">
                <ul className="dashboard-nav-list dashboard-nav-list-vertical">
                  <li>
                    <NavLink to="/logout">
                      <div className="footer-nav-button">
                        <img src={logoutWhiteIcon} className="footer-nav-button-image"/>
                        <span>{t("dashboard:nav.logout")}</span>
                      </div>
                    </NavLink>
                  </li>
                  <li className="dashboard-nav-sub-button">
                    <NavLink to="/settings">
                      <div className="footer-nav-button">
                        <img src={settingsWhiteIcon} className="footer-nav-button-image"/>
                        <span>{t("dashboard:nav.settings")}</span>
                      </div>
                    </NavLink>
                  </li>
                  <li className="dashboard-nav-sub-button">
                    <NavLink to="/docs">
                      <div className="footer-nav-button">
                        <img src={docsWhiteIcon} className="footer-nav-button-image"/>
                        <span>{t("dashboard:nav.docs")}</span>
                      </div>
                    </NavLink>
                  </li>
                  {/* <li className="dashboard-nav-sub-button">
                    <NavLink to="/subscribe">
                      <div className="footer-nav-button">
                        <img src={subscribeWhiteIcon} className="footer-nav-button-image"/>
                        <span>{t("dashboard:nav.subscribe")}</span>
                      </div>
                    </NavLink>
                  </li> */}
                </ul>
              </section>
            </nav>
          </div>
        </div>}

      <footer className="footer">
        <nav className="dashboard-nav">
          <section className="footer-buttons">
            <ul className="dashboard-nav-list">
              <li className="dashboard-nav-button">
                <NavLink to="/profile">
                  <div className="footer-nav-button">
                    <img src={userWhiteIcon} className="footer-nav-button-image"/>
                    <span>{t("dashboard:nav.profile")}</span>
                  </div>
                </NavLink>
              </li>
              <li className="dashboard-nav-button">
                <NavLink to="/schedule">
                  <div className="footer-nav-button">
                    <img src={calendarWhiteIcon} className="footer-nav-button-image"/>
                    <span>{t("dashboard:nav.schedule")}</span>
                  </div>
                </NavLink>
              </li>
              <li className="dashboard-nav-button">
                <NavLink to="/performance">
                  <div className="footer-nav-button">
                    <img src={performanceWhiteIcon} className="footer-nav-button-image"/>
                    <span>{t("dashboard:nav.performance")}</span>
                  </div>
                </NavLink>
              </li>
              <li className="dashboard-nav-button">
                <button>
                  <div className="footer-nav-button">
                    <img src={bellWhiteIcon} className="footer-nav-button-image"/>
                    <span>{t("dashboard:nav.notifications")}</span>
                  </div>
                </button>
              </li>

              <li className="dashboard-nav-button" onClick={handleShowMore}>
                <button>
                  <div className="footer-nav-button">
                    <img src={moreWhiteIcon} className="footer-nav-button-image"/>
                    <span>{t("dashboard:nav.more")}</span>
                  </div>
                </button>
              </li>
            </ul>
          </section>
        </nav>
      </footer>
    </>
  );
}

export default DashboardFooter;