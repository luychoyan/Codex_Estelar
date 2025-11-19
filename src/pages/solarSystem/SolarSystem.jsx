
import "./solarsystem.css"
import {systemSolar} from "../../data/systemSolar"
import Card from "../../components/card/Card"

// Pagina Sistema Solar

export default function SolarSystem() {
  return (
      <div id="containerContent">
        <div id="containerPlanets">

          <p className="subtittleSolarSystem">
            Planetas
          </p>

          {systemSolar.map((item) => (
            <Card item={item} />
          ))}
        </div>

        <div id="containerSubPlanets">

        </div>
      </div>
  )
}