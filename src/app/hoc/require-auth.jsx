import { Navigate } from "react-router-dom";
import { getCurrentUser } from "../store/user";
import { useSelector } from "react-redux";

export default function RequireAuth({ children }) {
  const { user } = useSelector(getCurrentUser());

  if (user === null) {
    return <Navigate to="/" replace />;
  }
  return children;
}
