

import {systemSolar} from "../../data/systemSolar"
import Card from "../../components/card/Card"

// Pagina Sistema Solar

export default function SolarSystem() {
  return (
      <div id="containerContent">
        {systemSolar.map((item) => (
          <Card item={item} />
        ))}
      </div>
  )
}