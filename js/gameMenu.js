import { startGame } from "./startGame.js";

export const createGameMenu = () => {
  const form = document.createElement("form");
  const input_H = document.createElement("input");
  const input_V = document.createElement("input");
  const title = document.createElement("h2");
  const inputBox = document.createElement("div");
  const inputBox2 = document.createElement("div");
  const gameBoard = document.getElementById("game-board");

  gameBoard.innerHTML = "";
  title.textContent = "Настроить количество карточек (по умолчанию 4)";
  title.style.textAlign = "center";
  input_H.placeholder = "По горизонтали";
  input_V.placeholder = "По вертикали";
  input_H.type = "number";
  input_V.type = "number";
  inputBox.classList.add("input-box");
  inputBox2.classList.add("input-box");

  form.append(title);
  form.append(inputBox);
  inputBox.append(input_H);
  form.append(inputBox2);
  inputBox2.append(input_V);




  const createGame = (count) => {
    const startButton = document.createElement("button");
    const span = document.createElement("span");
    startButton.classList.add("button");
    span.textContent = "Начать";
    startButton.append(span);
    startButton.addEventListener("click", () => {
        if (input_H.value >= 2 && input_H.value <= 10 && input_V.value >= 2 && input_V.value <= 10 && input_H.value % 2 == 0 && input_V.value % 2 == 0) {
          count = input_H.value * input_V.value;
        } else  {
          input_H.value = 4;
          input_V.value = 4;
        }

      startGame(count)
    });

    return startButton;
  };
  gameBoard.append(form, createGame());

};
