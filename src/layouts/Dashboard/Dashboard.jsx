import { Outlet, redirect } from "react-router-dom";
import DashboardNavigation from "../../components/Dashboard/DashboardNavigation";
import { getAuthStatus } from "../../util/auth";
import "./Dashboard.css";

function DashboardLayout({ children }) {
  // // Одноразова зміна кольору фона для компонентів дешборда
  // useEffect(() => {
  //   document.body.style.background = "#ddd";

  //   // Повернення стандартного фону після виходу
  //   return () => (document.body.style.background = "#fff");
  // }, []);

  return (
    <>
      <DashboardNavigation />
      <div className="dashboard-content">{children || <Outlet />}</div>
    </>
  );
}

export default DashboardLayout;

export function permForDashboardLoader() {
  const isLogged = getAuthStatus();
  console.log(isLogged);

  if (!!isLogged) {
    return null;
  } else {
    return redirect("/login");
  }
}
