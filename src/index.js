import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={"dev-g0u3g6ew.us.auth0.com"}
      clientId={"HQYJMP6IFQjv1hxUPa8C8fS3tiAY6SgX"}
      redirectUri={window.location.origin}
      cacheLocation={"localstorage"}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
