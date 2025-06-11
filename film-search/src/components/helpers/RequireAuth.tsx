import { useContext, type ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../context/user.context";

export const RequireAuth = ({ children }: { children: ReactNode }) => {
  const { loggedUser } = useContext(UserContext);

  if (!loggedUser?.isLogined) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
