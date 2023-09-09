import { InteractionStatus } from "@azure/msal-browser";
import {
  UnauthenticatedTemplate,
  useIsAuthenticated,
  useMsal,
} from "@azure/msal-react";
import { Navigate } from "react-router-dom";

interface AuthGuardProps {
  children?: React.ReactNode;
}

const UnauthGuard = ({ children = null }: AuthGuardProps) => {
  const isAuthenticated = useIsAuthenticated();
  const { inProgress } = useMsal();

  if (inProgress != InteractionStatus.None && isAuthenticated) {
    return <Navigate to="/" />;
  }

  return <UnauthenticatedTemplate>{children}</UnauthenticatedTemplate>;
};

export default UnauthGuard;
