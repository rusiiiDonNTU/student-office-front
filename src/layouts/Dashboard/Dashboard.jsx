import { Outlet, redirect } from "react-router-dom";
import DashboardHeader from "../../components/Dashboard/DashboardHeader/DashboardHeader";
import { getAuthStatus } from "../../util/auth";
import "./Dashboard.css";
import DashboardFooter from "../../components/Dashboard/DashboardFooter/DashboardFooter";
import { useEffect } from "react";

function DashboardLayout({ children }) {
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

export default DashboardLayout;

export async function permForDashboardLoader() {
  const isLogged = await getAuthStatus();

  if (!!isLogged) {
    return null;
  } else {
    return redirect("/login");
  }
}
