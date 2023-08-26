import { confetti } from "./confetti.js";
import { createGameCard } from "./gameCard.js";
import { createGameMenu } from "./gameMenu.js";
import { createIconsArray, duplicateArray, shuffle } from "./utils.js";

export const startGame = (count) => {
  let firstCard = null,
    secondCard = null,
    clickable = true;

  const gameSection = document.getElementById("game-board");
  const gameTable = document.createElement("div");
  const cardsIcons = createIconsArray(count);
  const duplicatedCardsIcons = duplicateArray(cardsIcons);
  const restartBtn = document.createElement("button");
  const span = document.createElement("span");
  let time = document.querySelector(".time");
  let moves = document.querySelector(".moves");
  let loop = null;
  let totalTime = 60;
  let totalFlips = 0;

  gameSection.innerHTML = "";
  gameTable.classList.add("game-table");
  restartBtn.classList.add("restart-button");
  span.textContent = "Рестарт";
  restartBtn.append(span);

  shuffle(duplicatedCardsIcons);

  duplicatedCardsIcons.forEach((icon) =>
    gameTable.append(createGameCard("question-circle", icon))
  );

  gameSection.append(gameTable, restartBtn);

  const cards = document.querySelectorAll(".game-card");

  restartBtn.addEventListener("click", () => {
    createGameMenu()
    moves.innerText = `Шаги: 0 шагов`;
    time.innerText = `Время: 60 сек`;
    clearInterval(loop)
  });

  loop = setInterval(() => {
    totalTime--;

    moves.innerText = `Шаги: ${totalFlips} шагов`;
    time.innerText = `Время: ${totalTime} сек`;
    if (totalTime == 0) {
      clearInterval(loop)
    }
  }, 1000);



  cards.forEach((card, index) =>
    card.addEventListener("click", () => {
      totalFlips++
      if (clickable == true && !card.classList.contains("successfully")) {
        card.classList.add("flip");

        if (firstCard == null) {
          firstCard = index;
        } else {
          if (index != firstCard) {
            secondCard = index;
            clickable = false;
          }
        }

        if (
          firstCard != null &&
          secondCard != null &&
          firstCard != secondCard
        ) {
          if (
            cards[firstCard].firstElementChild.className ===
            cards[secondCard].firstElementChild.className
          ) {
            setTimeout(() => {
              cards[firstCard].classList.add("successfully");
              cards[secondCard].classList.add("successfully");

              firstCard = null;
              secondCard = null;
              clickable = true;
            }, 500);
          } else {
            setTimeout(() => {
              cards[firstCard].classList.remove("flip");
              cards[secondCard].classList.remove("flip");

              firstCard = null;
              secondCard = null;
              clickable = true;
            }, 500);
          }
        }

        if (totalTime == 0) {
          clickable = false;
        }

        if ( Array.from(cards).every((card) => card.className.includes("flip"))) {
          document.querySelector(".confetti").innerHTML = confetti;
          clearInterval(loop);
        }
      }
    })
  );
};
