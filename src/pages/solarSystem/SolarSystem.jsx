
import "./solarsystem.css"
import {solarSystem} from "../../data/solarSystem"
import Card from "../../components/card/Card"

// Pagina Sistema Solar

export default function SolarSystem() {
  return (
      <div id="containerContent">
        <div id="containerPlanets">

          <p className="subtittleSolarSystem">
            Planetas
          </p>

          {solarSystem.map((item) => (
            <Card item={item} />
          ))}
        </div>

        <div id="containerSubPlanets">

        </div>
      </div>
  )
}