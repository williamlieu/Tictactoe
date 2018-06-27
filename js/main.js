// // Render a game board in the browser
// Switch turns between X and O (or whichever markers you select)
// Visually display which side won if a player gets three in a row or show a draw/"cat’s game" if neither wins
// Include separate HTML / CSS / JavaScript files
// Stick with KISS (Keep It Simple Stupid) and DRY (Don't Repeat Yourself) principles
// Use Javascript for DOM manipulation
// Deploy your game online, where the rest of the world can access it
// Use semantic markup for HTML and CSS (adhere to best practices)


const board = ['','','','','','','','',''];

const render = function() {
  for (var i = 0; i < board.length; i++) {
      $(`#${i}`).text( board[i] )
  }
}

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
    // render()
  } else {
    // player two is next
    playTwo(numb);
    playerOneIsNext = true;
    // switch player after placing value in board
    checkForWinner("O")
    // render()
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
 if (board[0] === player && board[3] === player && board[6] === player) {
   console.log(":Winnr");
   return "Winner"
 }
 if (board[0] === player && board[4] === player && board[8] === player) {
   console.log(":Winnr");
   return "Winner"
 }
 if (board[1] === player && board[4] === player && board[7] === player) {
   console.log(":Winnr");
   return "Winner"
 }
 if (board[0] === player && board[3] === player && board[6] === player) {
   console.log(":Winnr");
   return "Winner"
 }
 if (board[3] === player && board[4] === player && board[5] === player) {
   console.log(":Winnr");
   return "Winner"
 }
 if (board[6] === player && board[7] === player && board[8] === player) {
   console.log(":Winnr");
   return "Winner"
 }
 if (board[2] === player && board[4] === player && board[6] === player) {
   console.log(":Winnr");
   return "Winner"
}
};
