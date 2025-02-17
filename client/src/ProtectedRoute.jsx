import { Navigate } from "react-router-dom";
import { useAuth } from "../store/auth"; // Import authentication context

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated } = useAuth(); // Check user authentication

  return isAuthenticated ? element : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
