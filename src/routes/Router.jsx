

import { createBrowserRouter } from "react-router";
import Home from "../pages/home/Home";
import SolarSystem from "../pages/solarSystem/SolarSystem";
import Error from "../pages/error/Error";
import App from "../App";

// Controla a navegacao entre as paginas

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Elemento principal que nunca muda entre as telas
    errorElement: <Error />, // Pagina de Erro caso o nao encontre uma pagina
    children: [
      {
        // Pagina Principal
        path: "/",
        element: <Home />
      },
      {
        // Pagina Sistema Solar
        path: "sistemaSolar",
        element: <SolarSystem />
      }
    ]
  }
])