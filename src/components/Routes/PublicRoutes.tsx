import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import LoadingPage from "../../pages/LoadingPage";

const PublicRoutes = () => {
  const { status } = useContext(AuthContext);
  if (status === "checking") return <LoadingPage />;
  if (status === "authenticated") return <Navigate to='/' />;
  return <Outlet />;
};

export default PublicRoutes;
