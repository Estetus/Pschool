import { type ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

export const RequireAuth = ({ children }: { children: ReactNode }) => {
  const { isLogined } = useSelector((s: RootState) => s.user);

  if (!isLogined) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
