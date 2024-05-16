import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import SearchAppBar from "../components/SearchAppBar";
import Stack from "@mui/material/Stack";

function Layout() {
  // const location = useLocation();
  // console.log(location);
  return (
    <>
      <SearchAppBar />
      <Outlet />
    </>
  );
}

export default Layout;
