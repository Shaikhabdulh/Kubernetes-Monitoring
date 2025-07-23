let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
const boardDiv = document.getElementById("board");
const status = document.getElementById("status");
const aiToggle = document.getElementById("aiToggle");

// Get sound elements
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
  createBoard();
  clickSound.play(); // Play click sound on a valid move

  if (checkWin(board)) {
    // Use player display names for status
    const winnerName = (currentPlayer === "X") ? playerXDisplay.innerText : playerODisplay.innerText;
    status.innerText = `${winnerName} wins!`; // Update status with player name
    if (currentPlayer === "X") {
        playerXScore++;
    } else {
        playerOScore++;
    }
    updateScores();
    winSound.play(); // Play win sound
    return;
  } else if (!board.includes("")) {
    status.innerText = "It's a draw!";
    drawSound.play(); // Play draw sound
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";

  if (aiToggle.checked && currentPlayer === "O") {
    // Small delay for AI move to make click sound more noticeable
    setTimeout(() => {
        const best = bestMove();
        board[best] = currentPlayer;
        currentPlayer = "X";
        createBoard();
        clickSound.play(); // Play click sound for AI move

        if (checkWin(board)) {
            status.innerText = "AI (O) wins!";
            playerOScore++;
            updateScores();
            winSound.play(); // Play win sound for AI
        } else if (!board.includes("")) {
            status.innerText = "It's a draw!";
            drawSound.play(); // Play draw sound
        } else {
            // Use player X display name for turn
            status.innerText = `${playerXDisplay.innerText}'s Turn`; // Update status with player name
        }
    }, 300); // 300ms delay
  } else {
    // Use current player's display name for turn
    const nextPlayerName = (currentPlayer === "X") ? playerXDisplay.innerText : playerODisplay.innerText;
    status.innerText = `${nextPlayerName}'s Turn`;
  }
}

function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  createBoard();
  status.innerText = `${playerXDisplay.innerText}'s Turn`; // Reset status with player X's name
  resetSound.play(); // Play reset sound
}

// AI Minimax Algorithm
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
  const winner = checkWin(newBoard);
  if (winner === "O") return 10 - depth;
  if (winner === "X") return depth - 10;
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
  for (let pattern of winPatterns) {
    const [a, b1, c] = pattern;
    if (b[a] && b[a] === b[b1] && b[a] === b[c]) return b[a];
  }
  return null;
}

// Scoring System
let playerXScore = 0;
let playerOScore = 0;
const playerXScoreSpan = document.getElementById("playerXScore");
const playerOScoreSpan = document.getElementById("playerOScore");

function updateScores() {
    playerXScoreSpan.innerText = playerXScore;
    playerOScoreSpan.innerText = playerOScore;
}

// User Input for Player Names and Local Storage
const playerXNameInput = document.getElementById("playerXName");
const playerONameInput = document.getElementById("playerOName");
const playerXDisplay = document.getElementById("playerXDisplay");
const playerODisplay = document.getElementById("playerODisplay");

// Load names from local storage when the page loads
window.addEventListener('load', () => {
    const storedPlayerXName = localStorage.getItem('playerXName');
    const storedPlayerOName = localStorage.getItem('playerOName');

    if (storedPlayerXName) {
        playerXNameInput.value = storedPlayerXName;
        playerXDisplay.innerText = storedPlayerXName;
    }
    if (storedPlayerOName) {
        playerONameInput.value = storedPlayerOName;
        playerODisplay.innerText = storedPlayerOName;
    }
    // Update status text with loaded name or default
    status.innerText = `${playerXDisplay.innerText}'s Turn`;
    updateScores(); // Ensure scores are initialized on load (even if 0)
});

playerXNameInput.addEventListener("input", () => {
    const name = playerXNameInput.value;
    playerXDisplay.innerText = name || "Player X";
    localStorage.setItem('playerXName', name); // Store in local storage
    status.innerText = `${playerXDisplay.innerText}'s Turn`; // Update status with new name
});

playerONameInput.addEventListener("input", () => {
    const name = playerONameInput.value;
    playerODisplay.innerText = name || "Player O";
    localStorage.setItem('playerOName', name); // Store in local storage
});

// Initial board creation and status setting
createBoard();
// The status text is now set by the 'load' event listener for initial display