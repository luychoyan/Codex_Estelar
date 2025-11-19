
import iconErro from "../../assets/erro-404.png"
import "./error.css"

// Pagina de erro

export default function Error() {
  return (
    <div id="containerError">
      <h1>Error 404!</h1>
      <p>Pagina Nao Encontrada...</p>
      <img id="iconErro" src={iconErro} alt="" />
    </div>
  )
}