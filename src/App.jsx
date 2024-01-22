import { useState } from "react";
import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme, Box } from "@mui/material";
import Home from "./pages/Home";
import classes from "./app.module.scss";
import StepBarMobile from "./components/StepBarMobile";
import StepBarDesktop from "./components/StepBarDesktop";
import ButtonNav from "./components/ButtonNav";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
        </Route>
      </>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

function Root() {
  const [myMode, setMyMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: myMode,
      text: {
        secondary: "#969696",
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Box className={classes["core-container"]}>
          <StepBarMobile />
          <Box className={classes["desktop-wrapper"]}>
            <StepBarDesktop />
            <Outlet />
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
