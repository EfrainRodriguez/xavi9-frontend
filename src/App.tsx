import { BrowserRouter, Routes } from "react-router-dom";
import {
  PublicClientApplication,
  EventType,
  EventPayload,
} from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";

import MuiThemeProvider from "./theme";
import { renderRoutes, routes } from "./routes";
import NotistackProvider from "./components/ui/NotistackProvider";
import { AuthProvider } from "./pages/auth/context/auth.context";

import { msalConfig } from "./config/auth.config";
const pca = new PublicClientApplication(msalConfig);

pca.addEventCallback((event) => {
  if (event.eventType === EventType.LOGIN_SUCCESS) {
    const payloadAzure = event.payload as EventPayload;
    localStorage.setItem("payloadAzure", JSON.stringify(payloadAzure));
  }
});

const App = () => {
  return (
    <MsalProvider instance={pca}>
      <MuiThemeProvider>
        <NotistackProvider>
          <AuthProvider>
            <BrowserRouter>
              <Routes>{renderRoutes(routes)}</Routes>
            </BrowserRouter>
          </AuthProvider>
        </NotistackProvider>
      </MuiThemeProvider>
    </MsalProvider>
  );
};

export default App;
