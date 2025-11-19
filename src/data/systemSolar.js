
import mercuryIcon from "../assets/mercurioIcon.png"

// Todos os objetos celestes e suas caracteristicas

export const systemSolar = [
  {
    id: "PLAN-MERCURIO", // Identificador único
    categoria: "Planeta",
    nome: "Mercúrio",
    sistema: "Sistema Solar",
    localizacao: "Via Láctea (Interior)",
    
    // Dados Físicos e Orbitais
    tipo: "Planeta Telúrico",
    distancia_ua: 0.39,   // Distância Média em Unidades Astronômicas (UA)
    diametro_km: 4880,    // Diâmetro Equatorial em quilômetros
    gravidade: "0.38 G",
    periodo_orbital_dias: 88, // Dias terrestres para completar uma órbita
    periodo_rotacao_dias: 58.6, // Dias terrestres para completar uma rotação
    atmosfera: ["Exosfera (Sódio, Potássio, Oxigênio)"], // Extremamente tênue
    
    // Status e Descrição
    status_codex: "Observação (Alta Temperatura)",
    descricao: "O planeta mais interno e menor do Sistema Solar. Devido à sua proximidade com o Sol, exibe as maiores variações de temperatura, variando de -173 °C (noite) a 427 °C (dia). Sua superfície é geologicamente inativa e coberta de crateras.",
    imgIcon: {mercuryIcon}
  }
]