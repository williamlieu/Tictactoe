//Structure of the board
let board = ['', '', '', '', '', '', '', '', ''];
//Call the element X or 0 in the console
const render = function() {
  for (var i = 0; i < board.length; i++) {
    $(`#${i}`).text(board[i])
  }
}
//Function for reset the board
const reset = function (){
  board = ['', '', '', '', '', '', '', '', ''];
  render();
};

$(document).ready(function() {
// display the X or O in the board
  const startGame = document.querySelectorAll("td");
  let X_or_O = 0;

  for (let i = 0; i < startGame.length; i++) {
    const td = startGame[i];
    td.onclick = function() {
      if (X_or_O % 2 === 0) {
        console.log(X_or_O)
        this.player = "X";
        playOne(i);
        checkForWinner("X");
        X_or_O += 1;
      } else {
        console.log(X_or_O)
        this.player = "O";
        playTwo(i);
        X_or_O += 1;
        checkForWinner("O");
      }
      console.log(board);
      render();
    }
  }

  const playOne = function(numb) {
    board[numb] = "X";
  }

  const playTwo = function(numb) {
    board[numb] = "O";
  }


  // function to know which player will
  const playTurn = function(numb) {
    if (playerOneIsNext === true) {
      // players one turn
      playOne(numb);
      playerOneIsNext = false;
      // switch player after placing value in board
      checkForWinner("X")
      render()
    } else {
      // player two is next
      playTwo(numb);
      playerOneIsNext = true;
      // switch player after placing value in board
      checkForWinner("O")
    };
  }
  const countMove = 0;
  // Visually display which side won if a player gets three in a row or show a draw/"cat’s game" if neither wins
  const checkForWinner = function(player) {
    if (board[0] === player && board[1] === player && board[2] === player) {
      $('.winner').text(`${ player } wins!`)
      return "Winner"
    }

    if (board[0] === player && board[1] === player && board[2] === player) {
      $('.winner').text(`${ player } wins!`)
      return "Winner"
    }
    if (board[0] === player && board[3] === player && board[6] === player) {
      $('.winner').text(`${ player } wins!`)
      return "Winner"
    }
    if (board[0] === player && board[4] === player && board[8] === player) {
      $('.winner').text(`${ player } wins!`)
      return "Winner"
    }
    if (board[1] === player && board[4] === player && board[7] === player) {
      $('.winner').text(`${ player } wins!`)
      return "Winner"
    }
    if (board[0] === player && board[3] === player && board[6] === player) {
      $('.winner').text(`${ player } wins!`)
      return "Winner"
    }
    if (board[3] === player && board[4] === player && board[5] === player) {
      $('.winner').text(`${ player } wins!`)
      return "Winner"
    }
    if (board[6] === player && board[7] === player && board[8] === player) {
      $('.winner').text(`${ player } wins!`)
      return "Winner"
    }
    if (board[2] === player && board[4] === player && board[6] === player) {
      $('.winner').text(`${ player } wins!`)
      return "Winner"
    }
  }
});
