// Initial game state
let cells = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let result = document.querySelector('.result');
let btns = document.querySelectorAll('.btn');
let gameActive = true;

// Winning conditions
const winConditions = [
[0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
[0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
[0, 4, 8], [2, 4, 6] // Diagonals
];

// Function to check for a win
function checkWin() {
for (const condition of winConditions) {
const [a, b, c] = condition;
if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
result.textContent = `Player ${currentPlayer} wins!`;
disableButtons();
return;
}
}

if (!cells.includes('')) {
result.textContent = "It's a draw!";
disableButtons();
}
}

// Function to handle a player's move
function ticTacToe(button, index) {
if (!cells[index] && gameActive) {
cells[index] = currentPlayer;
button.textContent = currentPlayer;
checkWin();
currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
result.textContent = `Player ${currentPlayer}'s Turn`;
}
}

// Function to reset the game
function resetGame() {
cells = ['', '', '', '', '', '', '', '', ''];
currentPlayer = 'X';
result.textContent = `Player ${currentPlayer}'s Turn`;
enableButtons();
btns.forEach(btn => (btn.textContent = ''));
gameActive = true;
}

// Function to disable buttons
function disableButtons() {
gameActive = false;
btns.forEach(btn => (btn.disabled = true));
}

// Function to enable buttons
function enableButtons() {
gameActive = true;
btns.forEach(btn => (btn.disabled = false));
}

// Add click event listeners to buttons
btns.forEach((btn, index) => {
btn.addEventListener('click', () => ticTacToe(btn, index));
});

// Add click event listener to reset button
document.querySelector('#reset').addEventListener('click', resetGame);

// Initialize the game
resetGame();
