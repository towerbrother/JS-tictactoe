// all squares
const squares = document.querySelectorAll("td");
for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", play);
}

// reset button
const button = document.querySelector("button");
button.addEventListener("click", reset);

// message
const message = document.querySelector(".message");

// each square
const rowOneOne = document.querySelector(".row-one-one");
const rowOneTwo = document.querySelector(".row-one-two");
const rowOneThree = document.querySelector(".row-one-three");
const rowTwoOne = document.querySelector(".row-two-one");
const rowTwoTwo = document.querySelector(".row-two-two");
const rowTwoThree = document.querySelector(".row-two-three");
const rowThreeOne = document.querySelector(".row-three-one");
const rowThreeTwo = document.querySelector(".row-three-two");
const rowThreeThree = document.querySelector(".row-three-three");

// to know whose turn is
let turn = true;

// methods
function play(event) {
  if (!event.target.innerHTML) {
    message.innerText = turn ? "It is O turn" : "It is X turn";
    event.target.classList.add("clicked");
    event.target.innerText = turn ? "X" : "O";
    turn = !turn;
    setInterval(() => {
      event.target.classList.remove("clicked");
    }, 100);
  }
  if (winnerYesOrNo() === "winner") {
    message.style.color = "#1ea607";
    message.innerText = turn ? "The winner is O!!!" : "The winner is X!!!";
  }
  if (winnerYesOrNo() === "draw") {
    message.innerText = "It's a draw!";
  }
}

function reset() {
  button.classList.add("clicked");
  for (let i = 0; i < squares.length; i++) {
    squares[i].innerText = "";
  }
  setInterval(() => {
    button.classList.remove("clicked");
  }, 150);
  message.innerText = "Click any box to start";
  message.style.color = "black";
}

function winnerYesOrNo() {
  if (
    // first row
    (rowOneOne.innerText === rowOneTwo.innerText &&
      rowOneOne.innerText === rowOneThree.innerText &&
      rowOneTwo.innerText === rowOneThree.innerText &&
      rowOneOne.innerText != "" &&
      rowOneTwo.innerText != "" &&
      rowOneThree.innerText != "") ||
    // second row
    (rowTwoOne.innerText === rowTwoTwo.innerText &&
      rowTwoOne.innerText === rowTwoThree.innerText &&
      rowTwoTwo.innerText === rowTwoThree.innerText &&
      rowTwoOne.innerText != "" &&
      rowTwoTwo.innerText != "" &&
      rowTwoThree.innerText != "") ||
    // third row
    (rowThreeOne.innerText === rowThreeTwo.innerText &&
      rowThreeOne.innerText === rowThreeThree.innerText &&
      rowThreeTwo.innerText === rowThreeThree.innerText &&
      rowThreeOne.innerText != "" &&
      rowThreeTwo.innerText != "" &&
      rowThreeThree.innerText != "") ||
    // diagonal #1
    (rowOneOne.innerText === rowTwoTwo.innerText &&
      rowOneOne.innerText === rowThreeThree.innerText &&
      rowTwoTwo.innerText === rowThreeThree.innerText &&
      rowOneOne.innerText != "" &&
      rowTwoTwo.innerText != "" &&
      rowThreeThree.innerText != "") ||
    //diagonal #2
    (rowOneThree.innerText === rowTwoTwo.innerText &&
      rowOneThree.innerText === rowThreeOne.innerText &&
      rowTwoTwo.innerText === rowThreeOne.innerText &&
      rowOneThree.innerText != "" &&
      rowTwoTwo.innerText != "" &&
      rowThreeOne.innerText != "") ||
    // first column
    (rowOneOne.innerText === rowTwoOne.innerText &&
      rowOneOne.innerText === rowThreeOne.innerText &&
      rowTwoOne.innerText === rowThreeOne.innerText &&
      rowOneOne.innerText != "" &&
      rowTwoOne.innerText != "" &&
      rowThreeOne.innerText != "") ||
    // second column
    (rowOneTwo.innerText === rowTwoTwo.innerText &&
      rowOneTwo.innerText === rowThreeTwo.innerText &&
      rowTwoTwo.innerText === rowThreeTwo.innerText &&
      rowOneTwo.innerText != "" &&
      rowTwoTwo.innerText != "" &&
      rowThreeTwo.innerText != "") ||
    // third column
    (rowOneThree.innerText === rowTwoThree.innerText &&
      rowOneThree.innerText === rowThreeThree.innerText &&
      rowTwoThree.innerText === rowThreeThree.innerText &&
      rowOneThree.innerText != "" &&
      rowTwoThree.innerText != "" &&
      rowThreeThree.innerText != "")
  ) {
    return "winner";
  } else if (
    rowOneOne.innerText !== "" &&
    rowOneTwo.innerText !== "" &&
    rowOneThree.innerText !== "" &&
    rowTwoOne.innerText !== "" &&
    rowTwoTwo.innerText !== "" &&
    rowTwoThree.innerText !== "" &&
    rowThreeOne.innerText !== "" &&
    rowThreeTwo.innerText !== "" &&
    rowThreeThree.innerText !== ""
  ) {
    return "draw";
  } else {
    return false;
  }
}
