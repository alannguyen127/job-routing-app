import React, { useContext } from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Router,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ErrorPage from "./error-page";
import { dataLoader } from "./pages/HomePage";
import DetailPageModal from "./components/DetaiPageModal";
import LoginModal from "./components/LoginModal";
import Layout from "./pages/Layout";
import AuthContext from "./auth/AuthContext";

// import { createTheme, ThemeProvider } from "@mui/material";
// import CssBaseline from "@mui/material/CssBaseline";

export default function App() {
  const location = useLocation();
  const auth = useContext(AuthContext);
  const state = location.state;
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<Layout />}
        errorElement={<ErrorPage />}
        location={
          location.state?.backgroundLocation
            ? location.state.backgroundLocation
            : location
        }
      >
        <Route path="/" element={<HomePage />} loader={dataLoader} />
        <Route path="/:page" element={<HomePage />} loader={dataLoader} />
        <Route path="/login" element={<LoginModal />} loader={dataLoader} />
        {state && auth.user ? (
          <Route
            path="/job/:id"
            element={<DetailPageModal />}
            loader={dataLoader}
          />
        ) : (
          <Route path="/job/:id" element={<LoginModal />} loader={dataLoader} />
        )}
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
