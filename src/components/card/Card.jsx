
import "./card.css"
import { Link } from "react-router"

// Card de cada item da lista

export default function Card({item}) {
  return (
    <div id="containerItem">

      <img className="imageCard" src={item.imgIcon} alt={`Imagem de ${item.nome}`} />

      <p className="tittleCard">{item.nome}</p>

      <Link id="linkCard" to="ObjetoCeleste"/>
      
    </div>
  )
}