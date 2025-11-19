
// IMPORT DE TODOS OS PLANETAS
import mercuryIcon from "../assets/mercurioIcon.png"
import mercuryFull from "../assets/mercurioFull.png"
import jupterFull from "../assets/jupiterFull.png"
import jupterIcon from "../assets/jupiterIcon.png"
import marteFull from "../assets/marteFull.png"
import marteIcon from "../assets/marteIcon.png"
import neptuneFull from "../assets/neptuneFull.png"
import neptuneIcon from "../assets/neptuneIcon.png"
import saturnFull from "../assets/saturnFull.png"
import saturnIcon from "../assets/saturnIcon.png"
import sunFull from "../assets/sunFull.png"
import sunIcon from "../assets/sunIcon.png"
import terraFull from "../assets/terraFull.png"
import terraIcon from "../assets/terraIcon.png"
import uranusFull from "../assets/uranusFull.png"
import uranusIcon from "../assets/uranusIcon.png"
import venusFull from "../assets/uranusFull.png"
import venusIcon from "../assets/uranusIcon.png"


// Todos os objetos celestes e suas caracteristicas

export const solarSystem = [
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
    imgIcon: mercuryIcon,
    imgFull: mercuryFull
  },

  //PLANETA 2: VÊNUS 
  {
    id: "PLAN-VENUS",
    categoria: "Planeta",
    nome: "Vênus",
    sistema: "Sistema Solar",
    localizacao: "Via Láctea (Interior)",
    
    // Dados Físicos e Orbitais
    tipo: "Planeta Telúrico",
    distancia_ua: 0.72,
    diametro_km: 12104,
    gravidade: "0.91 G",
    periodo_orbital_dias: 225,
    atmosfera: ["CO2 (96.5%)", "Nitrogênio (3.5%)"],
    
    // Status e Descrição
    status_codex: "Pesquisa (Efeito Estufa Extremo)",
    descricao: "Conhecido como o 'Gêmeo Malvado' da Terra. Sua atmosfera densa de dióxido de carbono causa um efeito estufa descontrolado, tornando-o o planeta mais quente do sistema solar.",
    imgIcon: venusIcon,
    imgFull: venusFull
  },
  
  // --- PLANETA 3: TERRA ---
  {
    id: "PLAN-TERRA",
    categoria: "Planeta",
    nome: "Terra",
    sistema: "Sistema Solar",
    localizacao: "Via Láctea (Zona Habitável)",
    
    // Dados Físicos e Orbitais
    tipo: "Planeta Telúrico",
    distancia_ua: 1.0,
    diametro_km: 12742,
    gravidade: "1.0 G",
    periodo_orbital_dias: 365.25,
    atmosfera: ["Nitrogênio (78%)", "Oxigênio (21%)"],
    
    // Status e Descrição
    status_codex: "Operacional (Lar)",
    descricao: "O único lugar conhecido no universo onde a vida evoluiu. Sua localização na zona habitável e a presença de água líquida superficial são cruciais para a biodiversidade.",
    imgIcon: terraIcon,
    imgFull: terraFull
  },
  
  // --- PLANETA 4: MARTE ---
  {
    id: "PLAN-MARTE",
    categoria: "Planeta",
    nome: "Marte",
    sistema: "Sistema Solar",
    localizacao: "Via Láctea (Próximo)",
    
    // Dados Físicos e Orbitais
    tipo: "Planeta Telúrico",
    distancia_ua: 1.52,
    diametro_km: 6779,
    gravidade: "0.38 G",
    periodo_orbital_dias: 687,
    atmosfera: ["CO2 (95%)"],
    
    // Status e Descrição
    status_codex: "Colonização em Andamento",
    descricao: "O Planeta Vermelho, alvo primário da colonização humana. Possui calotas polares de água congelada e vastos cânions. Evidências sugerem que já foi um mundo quente e úmido.",
    imgIcon: marteIcon,
    imgFull: marteFull
  },
  
  // --- PLANETA 5: JÚPITER ---
  {
    id: "PLAN-JUPITER",
    categoria: "Planeta",
    nome: "Júpiter",
    sistema: "Sistema Solar",
    localizacao: "Via Láctea (Exterior)",
    
    // Dados Físicos e Orbitais
    tipo: "Gigante Gasoso",
    distancia_ua: 5.2,
    diametro_km: 142984,
    gravidade: "2.53 G",
    periodo_orbital_dias: 4333,
    atmosfera: ["Hidrogênio", "Hélio"],
    
    // Status e Descrição
    status_codex: "Observação (Grande Mancha Vermelha)",
    descricao: "O maior planeta do Sistema Solar, um gigante gasoso com uma massa mais de duas vezes a de todos os outros planetas combinados. Atua como um 'aspirador de pó' cósmico para o interior do sistema.",
    imgIcon: jupterIcon,
    imgFull: jupterFull
  },

  // --- PLANETA 6: SATURNO ---
  {
    id: "PLAN-SATURNO",
    categoria: "Planeta",
    nome: "Saturno",
    sistema: "Sistema Solar",
    localizacao: "Via Láctea (Exterior)",
    
    // Dados Físicos e Orbitais
    tipo: "Gigante Gasoso",
    distancia_ua: 9.58,
    diametro_km: 120536,
    gravidade: "1.06 G",
    periodo_orbital_dias: 10759,
    atmosfera: ["Hidrogênio", "Hélio", "Metano"],
    
    // Status e Descrição
    status_codex: "Pesquisa (Sistema de Anéis)",
    descricao: "Famoso por seu proeminente e complexo sistema de anéis, composto primariamente por gelo e rochas. É o menos denso dos planetas do sistema solar.",
    imgIcon: saturnIcon,
    imgFull: saturnFull
  },
  
  // --- PLANETA 7: URANO ---
  {
    id: "PLAN-URANO",
    categoria: "Planeta",
    nome: "Urano",
    sistema: "Sistema Solar",
    localizacao: "Via Láctea (Longe)",
    
    // Dados Físicos e Orbitais
    tipo: "Gigante de Gelo",
    distancia_ua: 19.2,
    diametro_km: 51118,
    gravidade: "0.89 G",
    periodo_orbital_dias: 30687,
    atmosfera: ["Hidrogênio", "Hélio", "Gelo"],
    
    // Status e Descrição
    status_codex: "Apenas Observação",
    descricao: "Único por sua inclinação axial extrema de 98 graus, fazendo-o parecer rolar em sua órbita. É um gigante de gelo frio com uma coloração azul-esverdeada devido ao metano na atmosfera.",
    imgIcon: uranusIcon,
    imgFull: uranusFull
  },
  
  // --- PLANETA 8: NETUNO ---
  {
    id: "PLAN-NETUNO",
    categoria: "Planeta",
    nome: "Netuno",
    sistema: "Sistema Solar",
    localizacao: "Via Láctea (Extremo)",
    
    // Dados Físicos e Orbitais
    tipo: "Gigante de Gelo",
    distancia_ua: 30.1,
    diametro_km: 49528,
    gravidade: "1.14 G",
    periodo_orbital_dias: 60190,
    atmosfera: ["Hidrogênio", "Hélio", "Gelo"],
    
    // Status e Descrição
    status_codex: "Apenas Observação",
    descricao: "O planeta mais distante do Sol. Conhecido por seus ventos super-sônicos e a 'Grande Mancha Escura', uma tempestade atmosférica de curta duração. É um gigante de gelo com intensa atividade climática.",
    imgIcon: neptuneIcon,
    imgFull: neptuneFull
  }
]