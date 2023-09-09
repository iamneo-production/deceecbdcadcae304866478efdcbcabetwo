let cells = document.querySelectorAll('.cell');
let resultText = document.getElementById('result');
let resetBtn = document.getElementById('reset-btn');

let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;


const checkWin = () => {
const winPatterns = [
[0, 1, 2], [3, 4, 5], [6, 7, 8], 
[0, 3, 6], [1, 4, 7], [2, 5, 8], 
[0, 4, 8], [2, 4, 6]             
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
resultText.textContent = "It's a draw!";
resetBtn.disabled = false;
}
};

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

cells.forEach(cell => {
cell.addEventListener('click', handleCellClick);
});

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

resetBtn.addEventListener('click', resetGame);