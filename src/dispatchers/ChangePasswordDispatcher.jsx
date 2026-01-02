import { useLoaderData, useNavigate, useSearchParams } from "react-router-dom";
import InternalChangePasswordPage from "../pages/dashboard/ChangePassword/InternalChangePassword";
import ExternalChangePasswordPage from "../pages/auth/ExternalChangePassword";

function ChangePasswordDispatcher() {
    const [searchParams] = useSearchParams();
    const authStatus = useLoaderData();
    const navigate = useNavigate();

    if (authStatus) {
        return <InternalChangePasswordPage />
    }

    const token = searchParams.get("token")
    if (token) {
        return <ExternalChangePasswordPage token={token}/>
    }

    return navigate("login");
}

export default ChangePasswordDispatcher;