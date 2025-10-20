import { Outlet } from "react-router-dom";
import DashboardNavigation from "../../components/Dashboard/DashboardNavigation";
import { getAuthStatus } from "../../util/auth";

function DashboardLayout() {
    return <>
        <DashboardNavigation />
        <Outlet />
    </>
}

export default DashboardLayout;

export function permForDashboardLoader() {
  const { isLogged } = getAuthStatus();

  if (isLogged) {
    return null;
  } else {
    return redirect("/login");
  }
}
