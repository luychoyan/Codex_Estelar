
import "./card.css"

export default function Card({item}) {
  return (
    <div id="containerItem">
      <img className="imageCard" src={item.img_url} alt="" />
      <p className="tittleCard">{item.nome}</p>
    </div>
  )
}