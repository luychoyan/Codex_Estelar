
import "./content.css"
import {systemSolar} from "../../data/systemSolar"
import Card from "../card/Card"

export default function Content() {

  return (
    <div id="containerContent">
      {
        systemSolar.map((item) => (
          <Card item={item} />
        ))
      }
    </div>
  )
}