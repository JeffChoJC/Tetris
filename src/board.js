import { drawSquare, drawScore, drawLevel } from './util';
import Tetromino from './tetrominos/tetromino';

class Board {
    constructor(scoreboard, ctx) {
        this.row = 20;
        this.column = 10;
        this.offset = 6;
        
        this.grid = [];
        for (let r = 0; r < this.row; r++) {
            this.grid.push([]);
            for (let c = 0; c < this.column; c++) {
                this.grid[r].push("white");
            }
        }

        this.scoreboard = scoreboard;
        
        this.draw(ctx);
        drawScore(this.scoreboard.currentScore, "black", ctx);
        drawLevel(this.scoreboard.level, "black", ctx);

        this.tetromino = new Tetromino(this, ctx);
        this.speed = setInterval(() => this.drop(ctx), 1000);
        document.addEventListener("keydown", e => this.control(e, ctx));
    }

    draw(ctx) {
        for (let r = 0; r < this.row; r++) {
            for (let c = 0; c < this.column; c++) {
                drawSquare(c + this.offset, r, this.grid[r][c], ctx);
            }
        }
    }

    generateTetromino(ctx) {
        this.draw(ctx);
        this.tetromino = new Tetromino(this, ctx);
    }

    drop(ctx) {
        this.tetromino.moveDown(ctx);
        this.scoreboard.addScore(4, ctx);
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

                if (newY >= this.row) {
                    return true;
                }

                if (newX < 0 || newX >= this.column) {
                    return "border";
                }

                if (this.grid[newY][newX] !== "white") {
                    return true;
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
                    this.scoreboard.addScore(10, ctx);
                    this.grid.unshift(new Array(10).fill("white"));
                }
            }
        }
    }
}

export default Board;