// // Render a game board in the browser
// Switch turns between X and O (or whichever markers you select)
// Visually display which side won if a player gets three in a row or show a draw/"cat’s game" if neither wins
// Include separate HTML / CSS / JavaScript files
// Stick with KISS (Keep It Simple Stupid) and DRY (Don't Repeat Yourself) principles
// Use Javascript for DOM manipulation
// Deploy your game online, where the rest of the world can access it
// Use semantic markup for HTML and CSS (adhere to best practices)



const board = [0, 0, 0, 0, 0, 0, 0, 0, 0]
// Switch turns between X and O (or whichever markers you select)
let playerOneIsNext = true;

const playOne = function(numb) {
  board[numb] = "X";
}

const playTwo = function(numb) {
  board[numb] = "O";
}

const playTurn = function(numb) {
  if (playerOneIsNext === true) {
    // players one turn
    playOne(numb);
    playerOneIsNext = false;
    // switch player after placing value in board
    checkForWinner("X")
  } else {
    // player two is next
    playTwo(numb);
    playerOneIsNext = true;
    // switch player after placing value in board
    checkForWinner("O")
  };
}

// Visually display which side won if a player gets three in a row or show a draw/"cat’s game" if neither wins


const checkForWinner = function(player) {
  if (board[0] === player && board[1] === player && board[2] === player) {
    console.log(":Winnr");
   return "Winner"
 }

 if (board[0] === player && board[1] === player && board[2] === player) {
   console.log(":Winnr");
  return "Winner"
}
} if (case1 = "X" && case4 = "X" && case7 = "X") {
   return "winner"
} if (case1 = "X" && case5 = "X" && case9 = "X") {
   return "Winner"
} if (case2 = "X" && case5 = "X" && case8 = "X") {
   return "Winner"
} if (case3 = "X" && case6 = "X" && case9 = "X") {
   return "Winner"
} if (case4 = "X" && case5 = "X" && case6 = "X") {
    return "Winner"
} if (case7 = "X" && case8 = "X" && case9 = "X") {
    return "Winner"
} if (case3 = "X" && case5 = "X" && case7 = "X") {
  return "Winner"
} if
