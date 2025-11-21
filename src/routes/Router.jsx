

import { createBrowserRouter } from "react-router";
import Home from "../pages/home/Home";
import SolarSystem from "../pages/solarSystem/SolarSystem";
import DSO from "../pages/dso/DSO";
import Telescope from "../pages/telescope/Telescope";
import ObjectCeleste from "../pages/objectCeleste/ObjectCeleste";
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
        path: "SistemaSolar",
        element: <SolarSystem />
      },
      {
        // Pagina DSO
        path: "DSO",
        element: <DSO />
      },
      {
        // Pagina Telescopios
        path: "Telescopios",
        element: <Telescope />
      },
      {
        // Pagina dos Objetos celestes celecionados
        path: "ObjetoCeleste",
        element: <ObjectCeleste />
      }
    ]
  }
])