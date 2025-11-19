

import { createBrowserRouter } from "react-router";
import Home from "../pages/home/Home";
import SolarSystem from "../pages/solarSystem/SolarSystem";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "solarSystem",
    element: <SolarSystem />
  }
])