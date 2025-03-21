import { Navigate } from "react-router-dom";
import { useAuth } from "../../ui/context/AuthContext";

const PublicRoute = ({ children }) => {
  const { token } = useAuth();

  if (token) return <Navigate to="/dashboard/home" replace />;
  return children;
};

export default PublicRoute;
