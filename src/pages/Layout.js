import React from "react";
import { Outlet } from "react-router-dom";
import SearchAppBar from "../components/SearchAppBar";
import Stack from "@mui/material/Stack";

function Layout() {
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
