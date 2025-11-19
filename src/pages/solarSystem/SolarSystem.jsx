

import Header from "../../components/header/Header"
import {systemSolar} from "../../data/systemSolar"
import Card from "../../components/card/Card"

export default function SolarSystem() {
  return (
    <div>

      <Header />

      <div id="containerContent">
        {systemSolar.map((item) => (
          <Card item={item} />
        ))}
      </div>

    </div>
  )
}