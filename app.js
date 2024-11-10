let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const generatecompchoice = () => {
  let options = ["rock", "paper", "scissors"];
  const randomindex = Math.floor(Math.random() * 3);
  return options[randomindex];
};
const drawgame = () => {
  console.log("game is draw ");
  msg.innerText = "Draw";
  msg.style.backgroundColor = "#081b31";
};

const showwinner = (userwin) => {
  if (userwin) {
    userscore++;
    userscorepara.innerText = userscore;
    console.log("you won");
    msg.innerText = "You won";
    msg.style.backgroundColor = "Green";
  } else {
    compscore++;
    compscorepara.innerText = compscore;
    console.log("you lose");
    msg.innerText = "You lose";
    msg.style.backgroundColor = "Red";
  }
};

const playgame = (userchoice) => {
  console.log(userchoice, "is clicked by user");
  const compchoice = generatecompchoice();
  console.log(compchoice, "is clicked by computer");
  if (userchoice === compchoice) {
    drawgame();
  } else {
    let userwin = true;
    if (userchoice === "rock") {
      userwin = compchoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      userwin = compchoice === "scissors" ? false : true;
    } else {
      userwin = compchoice === "rock" ? false : true;
    }
    showwinner(userwin);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playgame(userchoice);
  });
});
