import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

// OpenRoute component for routes accessible without authentication
function OpenRoute({ children }) {
  const { token } = useSelector((state) => state.auth);

  // If the user has a token, navigate to the dashboard
  if (token !== null) {
    return <Navigate to="/dashboard" />;
  }

  // If the user does not have a token, render the children (login page)
  return children;
}

export default OpenRoute;
