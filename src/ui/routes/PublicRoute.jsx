import { Navigate } from "react-router-dom";
import { useAuth } from "../../ui/context/AuthContext";

const PublicRoute = ({ children }) => {
  const { token } = useAuth();

  if (token) return <Navigate to="/dashboard/inicio" replace />;
  return children;
};

export default PublicRoute;
