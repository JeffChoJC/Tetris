import { drawSquare } from './util';

class Board {
    constructor() {
        this.row = 20;
        this.column = 10;
        this.vacant = 'white';
        
        this.board = [];
        for (let r = 0; r < this.row; r++) {
            this.board.push([]);
            for (let c = 0; c < this.column; c++) {
                this.board[r].push(this.vacant);
            }
        }
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