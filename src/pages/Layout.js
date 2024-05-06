import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import SearchAppBar from "../components/SearchAppBar";
import Stack from "@mui/material/Stack";

function Layout() {
  // const location = useLocation();
  // console.log(location);
  return (
    <Stack
      sx={{
        minHeight: "100vh",
        backgroundColor: (theme) => theme.palette.primary.main,
      }}
    >
      <SearchAppBar />
      <Outlet />
    </Stack>
  );
}

export default Layout;
