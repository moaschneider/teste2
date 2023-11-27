let escolhaJogador;
let escolhaComputador;
let vencedor;
let empates = 0;
let vitoriasJogador = 0;
let vitoriasComputador = 0;

const respostaComputador = document.querySelector("#resposta");
const resultadoJogo = document.querySelector("#resultado");
const placar = document.querySelector("#placar");

function pedra() {
  escolhaJogador = "Pedra";
  calculos();
}

function papel() {
  escolhaJogador = "Papel";
  calculos();
}

function tesoura() {
  escolhaJogador = "Tesoura";
  calculos();
}

function calculos() {
  mostraP();
  escolhaComputador = getComputerChoice();
  vencedor = determineWinner(escolhaJogador, escolhaComputador);
  respostaComputador.innerHTML = escolhaComputador;
  resultadoJogo.innerHTML += `${vencedor}`;
  placar.innerHTML = `Você ${vitoriasJogador} X ${vitoriasComputador} Computador`;
}

function mostraP() {
  let paragrafo = document.getElementById("computador");
  paragrafo.style.display = "block";
}

const getComputerChoice = (randomNumber) => {
  randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "Pedra";
    case 1:
      return "Papel";
    case 2:
      return "Tesoura";
  }
};

const trocaImagem = (getComputerChoice) => {
  switch (getComputerChoice) {
    case "Pedra":
      return `<img src="images/rock.svg>`;
      break;
    case "Papel":
      return `<img src="images/paper.svg>`;
      break;
    case "Tesoura":
      return `<img src="images/scissors.svg>`;
      break;
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice == computerChoice) {
    empates++;
    return `<span class="empate">•</span>`;
  }

  if (userChoice == "Pedra") {
    if (computerChoice == "Papel") {
      vitoriasComputador++;
      return `<span class="derrota">•</span>`;
    } else {
      vitoriasJogador++;
      return `<span class="vitoria">•</span>`;
    }
  }

  if (userChoice == "Papel") {
    if (computerChoice == "Tesoura") {
      vitoriasComputador++;
      return `<span class="derrota">•</span>`;
    } else {
      vitoriasJogador++;
      return `<span class="vitoria">•</span>`;
    }
  }

  if (userChoice == "Tesoura") {
    if (computerChoice == "Pedra") {
      vitoriasComputador++;
      return `<span class="derrota">•</span>`;
    } else {
      vitoriasJogador++;
      return `<span class="vitoria">•</span>`;
    }
  }
};
