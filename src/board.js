import { drawSquare } from './util';
import Tetromino from './tetrominos/tetromino';

class Board {
    constructor(ctx) {
        this.row = 20;
        this.column = 10;
        
        this.board = [];
        for (let r = 0; r < this.row; r++) {
            this.board.push([]);
            for (let c = 0; c < this.column; c++) {
                this.board[r].push("white");
            }
        }

        this.draw(ctx);
        this.tetromino = new Tetromino(this, ctx);
    }

    draw(ctx) {
        for (let r = 0; r < this.row; r++) {
            for (let c = 0; c < this.column; c++) {
                drawSquare(c, r, this.board[r][c], ctx);
            }
        }
    }

    collision(x, y) {
        let currentTetromino = this.tetromino.currentTetromino;
        for (let r = 0; r < currentTetromino.length; r++) {
            for (let c = 0; c < currentTetromino.length; c++) {
                if (!currentTetromino[r][c]) {
                    continue;
                }
                let newX = this.tetromino.x + c + x;
                let newY = this.tetromino.y + r + y;
                debugger
                if (newX < 0 || newX >= this.column || newY >= this.row) {
                    debugger
                    return true;
                }
                if (this.board[newY][newX] !== "white") {
                    debugger
                    return true;
                }
            }
        }
        return false;
    }
}

export default Board;