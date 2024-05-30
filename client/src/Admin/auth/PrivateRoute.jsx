import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const { token } = useSelector((state) => state.auth);

  // If the user does not have a token, navigate to the login page
  if (token === null) {
    return <Navigate to="/login" />;
  }

  // If the user has a token, render the children (dashboard or other private content)
  return children;
}

export default PrivateRoute;
