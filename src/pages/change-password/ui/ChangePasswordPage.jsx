import { useLoaderData, useNavigate, useSearchParams } from "react-router-dom";
import InternalChangePasswordPage from "../../dashboard/ChangePassword/InternalChangePassword";
import ExternalChangePasswordPage from "../../auth/ExternalChangePassword";
import DashboardLayout from "@/app/layouts/Dashboard/Dashboard";

export function ChangePasswordPage() {
    const [searchParams] = useSearchParams();
    const authStatus = useLoaderData();
    const navigate = useNavigate();

    if (authStatus) {
        return <DashboardLayout>
            <InternalChangePasswordPage />
        </DashboardLayout>
    }

    const token = searchParams.get("token")
    if (token) {
        return <ExternalChangePasswordPage token={token}/>
    }

    return navigate("login");
}