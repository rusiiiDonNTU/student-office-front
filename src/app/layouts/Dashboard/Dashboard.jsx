import { Outlet } from "react-router-dom";
import { DashboardHeader, DashboardFooter } from "../../../widgets";
import { useEffect } from "react";
import "./Dashboard.css";

export function DashboardLayout({ children }) {
  // Одноразова зміна кольору фона для лейаута дешборда
  useEffect(() => {
    document.body.style.background = "#e4e4e4";

    // Повернення стандартного фону після логауту
    return () => (document.body.style.background = "#fff");
  }, []);

  return (
    <div className="dashboard">
      <DashboardHeader />
      <div className="dashboard-content">{children || <Outlet />}</div>
      <DashboardFooter />
    </div>
  );
}
