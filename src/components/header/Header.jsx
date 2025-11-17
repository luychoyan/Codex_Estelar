
import "./header.css"
import icon from "../../assets/galaxia.png"

export default function Header() {
  return (
    <div id="containerHeader">
      <div className="containerTitleIcon">
        <img id="icon" src={icon} alt="" srcset="" />
        <h1 id="tittle">Codex Estelar</h1>
      </div>
      
    </div>
  )
}