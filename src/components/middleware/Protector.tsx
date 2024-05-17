import { ReactNode } from "react";
import useAuth from "../../hooks/use-auth.ts";
import { Navigate } from "react-router-dom";

interface Props {
  children?: ReactNode;
  authenticated?: boolean;
  roles?: string[];
  redirectUrl?: string;
}

export default function Protector({ children, authenticated = false, redirectUrl = "/", roles = [] }: Props) {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <></>;
  }

  if (authenticated && !user) {
    return <Navigate to={redirectUrl} />;
  }

  if (roles && user && !roles.includes(user.role)) {
    return <Navigate to={redirectUrl} />;
  }

  if (!authenticated && user) {
    return <Navigate to={redirectUrl} />;
  }

  console.log("kesini", authenticated, user);
  return <>{children}</>;
}