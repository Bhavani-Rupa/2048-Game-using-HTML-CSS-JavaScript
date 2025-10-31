/*
        2048 GAME LOGIC (Plain English Overview)

        - The game uses a 4 by 4 board (like a small checkerboard).
        - Each spot can hold a number (2, 4, 8, 16, ...). Empty spots are 0.
        - You press arrow keys to slide all numbers in that direction.
        - If two touching numbers are the same, they combine into one bigger number.
        - After each move, a new small number (usually 2) appears in a random empty spot.
        - The game ends when there are no empty spots and no merges left.
*/

let board = Array(4).fill().map(() => Array(4).fill(0));
        let score = 0; // Your current points; increases when tiles merge
        let gameStarted = false; // Becomes true after you press Start Game

        // Starts or restarts the game: clears the board and adds two starting tiles
        function startGame() {
            board = Array(4).fill().map(() => Array(4).fill(0));
            score = 0;
            document.getElementById('score').textContent = score;
            document.getElementById('game-over').classList.remove('show');
            document.getElementById('start-screen').classList.add('hide');
            gameStarted = true;
            addNewTile();
            addNewTile();
            updateBoard();
        }

        // Adds a new number (usually 2, sometimes 4) into a random empty cell
        function addNewTile() {
            const emptyCells = [];
            for (let i = 0; i < 4; i++) {
                for (let j = 0; j < 4; j++) {
                    if (board[i][j] === 0) {
                        emptyCells.push({i, j});
                    }
                }
            }
            if (emptyCells.length > 0) {
                const {i, j} = emptyCells[Math.floor(Math.random() * emptyCells.length)];
                board[i][j] = Math.random() < 0.9 ? 2 : 4;
            }
        }

        // Refreshes the tiles on screen and the score after each move
        function updateBoard() {
            for (let i = 0; i < 4; i++) {
                for (let j = 0; j < 4; j++) {
                    const tile = document.getElementById(`tile-${i}-${j}`);
                    tile.textContent = board[i][j] === 0 ? '' : board[i][j];
                    tile.setAttribute('data-value', board[i][j]);
                }
            }
            document.getElementById('score').textContent = score;
            if (isGameOver()) {
                document.getElementById('game-over').classList.add('show');
                gameStarted = false;
            }
        }

        // Returns true if there are no empty spots and no equal neighbors to merge
        function isGameOver() {
            for (let i = 0; i < 4; i++) {
                for (let j = 0; j < 4; j++) {
                    if (board[i][j] === 0) return false;
                    if (i < 3 && board[i][j] === board[i+1][j]) return false;
                    if (j < 3 && board[i][j] === board[i][j+1]) return false;
                }
            }
            return true;
        }

        // Slides all numbers to the left and merges equal neighbors (once per move)
        function moveLeft() {
            let moved = false;
            for (let i = 0; i < 4; i++) {
                let row = board[i].filter(val => val !== 0);
                for (let j = 0; j < row.length - 1; j++) {
                    if (row[j] === row[j+1]) {
                        row[j] *= 2;
                        score += row[j];
                        row[j+1] = 0;
                        moved = true;
                    }
                }
                row = row.filter(val => val !== 0);
                while (row.length < 4) row.push(0);
                if (board[i].join() !== row.join()) moved = true;
                board[i] = row;
            }
            return moved;
        }

        // Rotates the board 90° clockwise so we can reuse moveLeft() for other directions
        function rotateBoard() {
            const newBoard = Array(4).fill().map(() => Array(4).fill(0));
            for (let i = 0; i < 4; i++) {
                for (let j = 0; j < 4; j++) {
                    newBoard[i][j] = board[3-j][i];
                }
            }
            board = newBoard;
        }

        // Listens for arrow key presses and moves tiles in that direction
        document.addEventListener('keydown', (e) => {
            if (!gameStarted) return;
            let moved = false;
            if (e.key === 'ArrowLeft') {
                moved = moveLeft();
            } else if (e.key === 'ArrowRight') {
                rotateBoard(); rotateBoard();
                moved = moveLeft();
                rotateBoard(); rotateBoard();
            } else if (e.key === 'ArrowUp') {
                rotateBoard(); rotateBoard(); rotateBoard();
                moved = moveLeft();
                rotateBoard();
            } else if (e.key === 'ArrowDown') {
                rotateBoard();
                moved = moveLeft();
                rotateBoard(); rotateBoard(); rotateBoard();
            }
            if (moved) {
                addNewTile();
                updateBoard();
            }
        });