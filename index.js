// Aqui você está selecionando elementos HTML pelo seu ID e classe.
const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const gameBtn = document.querySelectorAll(".gameBtn");

// Aqui você está criando variáveis para armazenar escolhas do jogador, do computador e o resultado do jogo.
let player;
let computer;
let result;

// Este trecho de código adiciona um event listener de clique a todos os botões com a classe "gameBtn".
gameBtn.forEach(button => button.addEventListener("click", () => {
    // Quando um botão é clicado, ele executa esta função de callback:

    // 1. Captura a escolha do jogador com base no texto do botão clicado.
    player = button.textContent;

    // 2. Chama a função "computerTurn" para determinar a escolha aleatória do computador.
    computerTurn();

    // 3. Atualiza os elementos HTML para mostrar as escolhas do jogador e do computador.
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;

    // 4. Chama a função "checkWinner" para verificar quem ganhou e atualiza o elemento HTML "resultText".
    resultText.textContent = checkWinner();
})); 

// Esta função gera a escolha aleatória do computador (ROCK, PAPER ou SCISSORS).
function computerTurn(){
    const ranNum = Math.floor(Math.random() * 3) + 1;

    switch(ranNum){
        case 1:
            computer = "ROCK";
            break;
        
        case 2:
            computer = "PAPER";
            break;

        case 3:
            computer = "SCISSORS";
            break;
    }
}

// Esta função verifica quem ganhou com base nas escolhas do jogador e do computador.
function checkWinner(){
    if(player == computer){
        return "Draw";
    }
    else if(computer == "ROCK"){
        return (player == "PAPER") ? "You win!" : "You Lose!"
    }
    else if(computer == "SCISSORS"){
        return (player == "ROCK") ? "You win!" : "You Lose!"
    }

    else if(computer == "PAPER"){
        return (player == "SCISSORS") ? "You win!" : "You Lose!"
    }
}
