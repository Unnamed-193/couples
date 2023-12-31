import { createGameMenu } from "./gameMenu.js";

export const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

export const duplicateArray = (array) =>
  array.reduce((res, current) => res.concat([current, current]), []);

export const createIconsArray = (initialCount) => {
  const cardsIcons = [
    "compass",
    "cloud",
    "play",
    "bolt",
    "stop",
    "cogs",
    "atom",
    "basketball-ball",
    "arrows",
    "angle-left",
    "bars",
    "file",
    "filter",
    "gear",
    "folder",
    "folder-open",
    "shield",
    "scissors",
    "pen-clip"
  ];


  switch (initialCount) {
    case 4:
      return cardsIcons.slice(0, 2);
    case 16:
      return cardsIcons.slice(0, 8);
    case 36:
      return cardsIcons.slice(0, 18);
    case 36:
      return cardsIcons;
    default:
      break;
  }
};
