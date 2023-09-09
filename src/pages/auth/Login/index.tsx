import { useEffect, useState, Fragment } from "react";
import { useMsal } from "@azure/msal-react";
import { CircularProgress, Container, Typography } from "@mui/material";

import { setIsAuthenticated } from "../context/auth.actions";
import { loginRequest } from "../../../config/auth.config";

const MsalRedirect = () => {
  const [loading, setLoading] = useState(false);

  const { instance } = useMsal();

  const handleRedirect = () => {
    setLoading(true);
    instance.loginRedirect({
      scopes: loginRequest.scopes,
    }).then(() => {
      setIsAuthenticated(true);
    }).finally(() => {
      setLoading(false);
    });
  };

  useEffect(() => {
    handleRedirect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [instance]);

  return loading ? (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <CircularProgress />
      <Typography variant="h6">Redirecting...</Typography>
    </Container>
  ) : <Fragment />;
};

export default MsalRedirect;
