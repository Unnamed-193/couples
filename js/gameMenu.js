import { startGame } from "./startGame.js";

export const createGameMenu = () => {
  const form = document.createElement("form");
  const input = document.createElement("input");

  const title = document.createElement("h2");
  const inputBox = document.createElement("div");

  const gameBoard = document.getElementById("game-board");

  gameBoard.innerHTML = "";
  title.textContent = "Настроить количество карточек (от 2 до 6)";
  title.style.textAlign = "center";
  input.placeholder = "По горизонтали / вертикали";
  input.type = "number";
  inputBox.classList.add("input-box");
  input.max = 6;
  input.min = 2;


  form.append(title);
  form.append(inputBox);
  inputBox.append(input);


  const createGame = (count) => {
    const startButton = document.createElement("button");
    const span = document.createElement("span");
    startButton.classList.add("button");
    span.textContent = "Начать";
    startButton.append(span);
    form.append(startButton)
    startButton.addEventListener("click", (element) => {
      element.preventDefault()
      let columns = input.value;
        if (input.value >= 2 && input.value <= 6  && input.value % 2 == 0) {
          count = input.value * input.value;
        } else  {
          input.value = 4;
        }
      startGame(count, columns)
    });
    return form
  };
  gameBoard.append(form, createGame());

};
