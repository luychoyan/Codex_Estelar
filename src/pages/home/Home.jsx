

import Header from "../../components/header/Header"
import "./home.css"

// Pagina Home

export default function Home() {
  return (
    <div id="containerContent">
      <h3 className="welcomeHome">
        Ola, seja muito bem vindo!
      </h3>
      <p className="textHome">
        Meu nome e Luy Choyan, e sou o dono do canal Viajante Galactico no YouTube, e criei o Codex Estelar para ajudar as pessoas que estao comecando na astronomia e nas observacoes amadoras. E ajudar os apaixonados por esse incomensuravel universo!
      </p>

      <p className="textHome">
        Aqui voce vera de tudo um pouco, para ajudar nas suas observacoes ou ate mesmo aprender algumas coisinhas... 
        Fique a vontade para navegar nos catalogos nas abas <span>Sistema Solar</span>  e <span>DSO</span>, na aba Telescopios voce conhecera
        e aprendera um pouco sobre essa incrivel ferramenta, na qual gosto de chamar que e o buraco na fechadura
        desse incomensuravel universo!
      </p>
  </div>
  )
}