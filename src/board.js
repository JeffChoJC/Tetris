import { drawSquare } from './util';
import Tetromino from './tetrominos/tetromino';
import Scoreboard from './scoreboard';

class Board {
    constructor(ctx) {
        this.row = 20;
        this.column = 10;
        this.offsetX = 6;
        this.offsetY = 4;
        
        this.grid = [];
        for (let r = 0; r < this.row; r++) {
            this.grid.push([]);
            for (let c = 0; c < this.column; c++) {
                this.grid[r].push("white");
            }
        }

        this.scoreboard = new Scoreboard(this, ctx);

        this.history = [0, 1, 2, 3, 4, 5, 6];
        this.shuffle();
        this.generateTetromino(ctx);
        this.speed;
        document.addEventListener("keydown", e => this.control(e, ctx));
    }

    draw(ctx) {
        for (let r = 0; r < this.row; r++) {
            for (let c = 0; c < this.column; c++) {
                drawSquare(c + this.offsetX, r + this.offsetY, this.grid[r][c], ctx);
            }
        }
    }

    shuffle() {
        for (let i = 6; i > 0; i--) {
            const j = Math.floor(Math.random() * 7);
            [this.history[i], this.history[j]] = [this.history[j], this.history[i]];
        }
    }

    generateTetromino(ctx) {
        if (this.history.length === 0) {
            this.history = [0, 1, 2, 3, 4, 5, 6];
            this.shuffle();
        }

        const pieceNumber = this.history[0];
        if (this.isGameOver() === false) {
            this.draw(ctx);
            this.tetromino = new Tetromino(this, ctx, pieceNumber);
            this.history.shift();
        }
    }

    drop(ctx) {
        this.tetromino.moveDown(ctx);
    }

    control(e, ctx) {
        switch (e.key) {
            case "ArrowRight":
                this.tetromino.moveRight(ctx);
                break;
            case "ArrowLeft":
                this.tetromino.moveLeft(ctx);
                break;
            case "ArrowUp":
                this.tetromino.rotate(ctx);
                break;
            case "ArrowDown":
                this.tetromino.moveDown(ctx);
                break;
            case " ":
                this.tetromino.floor(ctx);
        }
    }

    collision(x, y, currentTetromino) {
        for (let r = 0; r < currentTetromino.length; r++) {
            for (let c = 0; c < currentTetromino[r].length; c++) {
                if (!currentTetromino[r][c]) {
                    continue;
                }

                let newX = this.tetromino.x + c + x;
                let newY = this.tetromino.y + r + y;

                if (newY >= this.row + this.offsetY) {
                    return true;
                }

                if (newX < 0 || newX >= this.column) {
                    return "border";
                }

                let gridY = newY - this.offsetY;
                if (newY >= 4) {
                    if (this.grid[gridY][newX] !== "white") {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    clearLines(ctx) {
        for (let r = 0; r < this.row; r++) {
            for (let c = 0; c < this.column; c++) {
                if (this.grid[r][c] === 'white') {
                    break;
                }

                if (c === this.column - 1) {
                    this.grid.splice(r, 1);
                    this.scoreboard.addScore(14, ctx);
                    this.grid.unshift(new Array(10).fill("white"));
                }
            }
        }
    }

    isGameOver() {
        for (let c = 0; c < this.column; c++) {
            if (this.grid[0][c] !== "white") {
                alert("Game Over");
                clearInterval(this.speed);
                return true;
            }
        }
        return false;
    }
}

export default Board;