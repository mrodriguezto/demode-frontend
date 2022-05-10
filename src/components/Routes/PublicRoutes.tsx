import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { AuthContext } from "../../context/AuthContext";

const PublicRoutes = () => {
  const { status } = useContext(AuthContext);
  if (status === "checking") return <div>Cargando...</div>;
  if (status === "authenticated") return <Navigate to='/' />;
  return <Outlet />;
};

export default PublicRoutes;
