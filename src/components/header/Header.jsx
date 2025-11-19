
import "./header.css"
import icon from "../../assets/galaxia.png"
import { Link } from "react-router"

// Header de navegacao

export default function Header() {
  return (
    <div id="containerHeader">
      <div className="containerTitleIcon">
        <img id="icon" src={icon} alt="" srcset="" />
        <h1 id="tittle">Codex Estelar</h1>
      </div>

      <div className="containerNavigation">
        <Link to="/" className="textNavigation">Home</Link>
        <Link to="SistemaSolar" className="textNavigation">Sistema Solar</Link>
        <Link to="DSO" className="textNavigation">DSO</Link>
        <Link to="Telescopios" className="textNavigation">Telescopios</Link>
      </div>
      
    </div>
  )
}