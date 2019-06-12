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
        this.tetromino = new Tetromino(ctx);
    }

    draw(ctx) {
        for (let r = 0; r < this.row; r++) {
            for (let c = 0; c < this.column; c++) {
                drawSquare(c, r, this.board[r][c], ctx);
            }
        }
    }
}

export default Board;