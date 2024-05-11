let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");
const drawGame = () => {
    msg.innerText = "Game was draw,play again";
};
const showWinner = (userWin, userchoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorepara.innerText=userScore;
        msg.innerText = `you win! your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } 
    else {
        compScore++;
        compScorepara.innerText=compScore;
        msg.innerText = `you loose! ${compChoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
};
const gemCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomInx = Math.floor(Math.random() * 3);
    return options[randomInx];
};
const playGame = (userchoice) => {
    console.log("user choice=", userchoice);
    //Generate computer choice-> modular
    const compChoice = gemCompChoice();
    console.log("comp choice=", compChoice);

    if (userchoice === compChoice) {
        //Draw game
        drawGame();
    } else {
        let userWin = true;
        if (userchoice === "rock") {
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
             //rock,scissor
            userWin = compChoice === "scissor" ? false : true;
        } else {
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
      showWinner(userWin, userchoice, compChoice);
    }
};
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute('id');
        console.log("choice was clicked", userchoice);
        playGame(userchoice);
    });
});
