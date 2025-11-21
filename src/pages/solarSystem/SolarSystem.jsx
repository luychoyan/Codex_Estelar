
import "./solarsystem.css"
import {solarSystem} from "../../data/solarSystem"
import Card from "../../components/card/Card"

// Pagina Sistema Solar

export default function SolarSystem() {
  return (
      <div id="containerContent">
        <div id="containerIntro">
        <p className="subtittleSolarSystem">
          Sistema Solar
        </p>

        <div>
          <p className="txtSolarSystem">Aqui voce vera como e a nossa visinhanca, quais corpos celestes possuem e quais sao possiveis de ver
            com telescopios aqui na terra. Um Sistema Solar é um sistema planetário que consiste em uma estrela 
            (ou um sistema de estrelas) e todos os objetos astronômicos que a orbitam, ligados pela sua força gravitacional.
            O nosso sistema, em particular, é chamado de Sistema Solar (com S maiúsculo) porque a estrela central é o Sol.
          </p>
        </div>

        <div id="containerPlanets">
          
        </div>

        </div>
      </div>
  )
}