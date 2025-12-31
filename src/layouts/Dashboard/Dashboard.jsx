import { Outlet, redirect } from "react-router-dom";
import DashboardHeader from "../../components/Dashboard/DashboardHeader/DashboardHeader";
import { getAuthStatus } from "../../util/auth";
import "./Dashboard.css";
import DashboardFooter from "../../components/Dashboard/DashboardFooter/DashboardFooter";

function DashboardLayout({ children }) {
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
