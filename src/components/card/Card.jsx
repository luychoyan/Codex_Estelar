
import "./card.css"

// Card de cada item da lista

export default function Card({item}) {
  return (
    <div id="containerItem">
      <img className="imageCard" src={item.imgIcon} alt="" />
      <p className="tittleCard">{item.nome}</p>
    </div>
  )
}