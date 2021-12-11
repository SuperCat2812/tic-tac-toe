let isCross = true;
let emptyCount = 9;
let cletka = document.querySelectorAll(".clet");
let winnerMessage = document.getElementById("winner");
let array = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
for (let cletka1 of cletka) {
  cletka1.textContent = "";
}
for (let cletka1 of cletka) {
  cletka1.onclick = function () {
    if (emptyCount) {
      emptyCount--;
      display(cletka1);
      checkWinCombination(!isCross);
      console.log(emptyCount);
    }
  };
}

function display(cletka1) {
  if (isCross && cletka1.textContent === "") {
    cletka1.textContent = "x";
    array[cletka1.id] = 1;
    isCross = false;
  } else if (!isCross && cletka1.textContent === "") {
    cletka1.textContent = "o";
    array[cletka1.id] = 0;
    isCross = true;
  }
}

function checkWinCombination(isCross) {
  let label = isCross ? 1 : 0;

  if (emptyCount == 0) {
    console.log(emptyCount);
    winnerMessage.textContent = "Game over";
  }

  if (
    (array[0] == label && array[1] == label && array[2] == label) ||
    (array[3] == label && array[4] == label && array[5] == label) ||
    (array[6] == label && array[7] == label && array[8] == label) ||
    (array[0] == label && array[3] == label && array[6] == label) ||
    (array[1] == label && array[4] == label && array[7] == label) ||
    (array[2] == label && array[5] == label && array[8] == label) ||
    (array[0] == label && array[4] == label && array[8] == label) ||
    (array[2] == label && array[4] == label && array[6] == label)
  ) {
    if (label == 1) {
      winnerMessage.textContent = "Cross win";
      emptyCount = 0;
    } else {
      winnerMessage.textContent = "Zero win";
      emptyCount = 0;
    }
  }
}
let restart = document.getElementById("reset");
restart.onclick = function () {
  for (let cletka1 of cletka) {
    cletka1.textContent = "";
  }
  emptyCount=9;
  array = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
  winnerMessage.textContent = "";
  isCross = true;
};
