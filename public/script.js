const cells = document.querySelectorAll('[data-cell]');
const resultText = document.getElementById('result');
const resetBtn = document.getElementById('reset-btn');

let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

// Check if a player has won
const checkWin = () => {
const winPatterns = [
[0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
[0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
[0, 4, 8], [2, 4, 6]             // Diagonals
];

for (const pattern of winPatterns) {
const [a, b, c] = pattern;
if (board[a] && board[a] === board[b] && board[a] === board[c]) {
gameActive = false;
resultText.textContent = `Player ${currentPlayer} wins!`;
resetBtn.disabled = false;
return;
}
}

if (!board.includes('')) {
gameActive = false;
resultText.textContent = 'It\'s a draw!';
resetBtn.disabled = false;
}
};

// Handle cell click event
const handleCellClick = (e) => {
const cell = e.target;
const cellIndex = cell.dataset.cell;

if (board[cellIndex] === '' && gameActive) {
cell.textContent = currentPlayer;
board[cellIndex] = currentPlayer;
checkWin();
currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
resultText.textContent = `Player ${currentPlayer}'s Turn`;
}
};

// Add click event listeners to cells
cells.forEach(cell => {
cell.addEventListener('click', handleCellClick);
});

// Reset the game
const resetGame = () => {
currentPlayer = 'X';
board = ['', '', '', '', '', '', '', '', ''];
gameActive = true;
resultText.textContent = `Player ${currentPlayer}'s Turn`;
cells.forEach(cell => {
cell.textContent = '';
});
resetBtn.disabled = true;
};

resetBtn.addEventListener('click', resetGame);
