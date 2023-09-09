import { InteractionStatus } from "@azure/msal-browser";
import {
  AuthenticatedTemplate,
  useIsAuthenticated,
  useMsal,
} from "@azure/msal-react";
import { Navigate } from "react-router-dom";

interface AuthGuardProps {
  children?: React.ReactNode;
}

const AuthGuard = ({ children = null }: AuthGuardProps) => {
  const isAuthenticated = useIsAuthenticated();
  const { inProgress } = useMsal();

  if (inProgress === InteractionStatus.None && !isAuthenticated) {
    return <Navigate to="/auth/login" />;
  }

  return <AuthenticatedTemplate>{children}</AuthenticatedTemplate>;
};

export default AuthGuard;
