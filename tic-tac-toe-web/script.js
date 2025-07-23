let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";

const boardDiv = document.getElementById("board");
const status = document.getElementById("status");
const aiToggle = document.getElementById("aiToggle");

// Sounds
const clickSound = document.getElementById("clickSound");
const winSound = document.getElementById("winSound");
const drawSound = document.getElementById("drawSound");
const resetSound = document.getElementById("resetSound");

function createBoard() {
  boardDiv.innerHTML = "";
  board.forEach((cell, index) => {
    const cellDiv = document.createElement("div");
    cellDiv.className = "cell";
    cellDiv.innerText = cell;
    cellDiv.addEventListener("click", () => handleMove(index));
    boardDiv.appendChild(cellDiv);
  });
}

function handleMove(index) {
  if (board[index] || checkWin(board)) return;

  board[index] = currentPlayer;
  clickSound.play();
  createBoard();

  if (checkWin(board)) {
    winSound.play();
    status.innerText = `Player ${currentPlayer} wins!`;
    return;
  } else if (!board.includes("")) {
    drawSound.play();
    status.innerText = "It's a draw!";
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";

  if (aiToggle.checked && currentPlayer === "O") {
    setTimeout(() => {
      const best = bestMove();
      board[best] = currentPlayer;
      clickSound.play();
      createBoard();

      if (checkWin(board)) {
        winSound.play();
        status.innerText = "AI (O) wins!";
      } else if (!board.includes("")) {
        drawSound.play();
        status.innerText = "It's a draw!";
      } else {
        currentPlayer = "X";
        status.innerText = `Player ${currentPlayer}'s Turn`;
      }
    }, 300);
  } else {
    status.innerText = `Player ${currentPlayer}'s Turn`;
  }
}

function bestMove() {
  let bestScore = -Infinity;
  let move;
  for (let i = 0; i < 9; i++) {
    if (!board[i]) {
      board[i] = "O";
      let score = minimax(board, 0, false);
      board[i] = "";
      if (score > bestScore) {
        bestScore = score;
        move = i;
      }
    }
  }
  return move;
}

function minimax(newBoard, depth, isMaximizing) {
  const result = checkWin(newBoard);
  if (result === "O") return 10 - depth;
  if (result === "X") return depth - 10;
  if (!newBoard.includes("")) return 0;

  if (isMaximizing) {
    let best = -Infinity;
    for (let i = 0; i < 9; i++) {
      if (!newBoard[i]) {
        newBoard[i] = "O";
        best = Math.max(best, minimax(newBoard, depth + 1, false));
        newBoard[i] = "";
      }
    }
    return best;
  } else {
    let best = Infinity;
    for (let i = 0; i < 9; i++) {
      if (!newBoard[i]) {
        newBoard[i] = "X";
        best = Math.min(best, minimax(newBoard, depth + 1, true));
        newBoard[i] = "";
      }
    }
    return best;
  }
}

function checkWin(b) {
  const winPatterns = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
  ];
  for (let [a, b1, c] of winPatterns) {
    if (b[a] && b[a] === b[b1] && b[a] === b[c]) return b[a];
  }
  return null;
}

function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  resetSound.play();
  createBoard();
  status.innerText = "Player X's Turn";
}

createBoard();
