
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
        <Link to="sistemaSolar" className="textNavigation">Sistema Solar</Link>
        <Link className="textNavigation">DSO</Link>
        <Link className="textNavigation">Telescopios</Link>
      </div>
      
    </div>
  )
}