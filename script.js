let board = Array(4).fill().map(() => Array(4).fill(0));
        let score = 0;
        let gameStarted = false;

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

        function rotateBoard() {
            const newBoard = Array(4).fill().map(() => Array(4).fill(0));
            for (let i = 0; i < 4; i++) {
                for (let j = 0; j < 4; j++) {
                    newBoard[i][j] = board[3-j][i];
                }
            }
            board = newBoard;
        }

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