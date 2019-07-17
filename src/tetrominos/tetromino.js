import { drawSquare, eraseSquare } from '../util';
import I from './i';
import J from './j';
import L from './l';
import O from './o';
import S from './s';
import Z from './z';
import T from './t';

class Tetromino {
    constructor(board, ctx, pieceNumber) {
        this.board = board;

        switch (pieceNumber) {
            case 0:
                this.piece = new I();
                break;
            case 1:
                this.piece = new J();
                break;
            case 2:
                this.piece = new L();
                break;
            case 3:
                this.piece = new O();
                break;
            case 4:
                this.piece = new S();
                break;
            case 5:
                this.piece = new T();
                break;
            case 6:
                this.piece = new Z();
        }

        this.color = this.piece.color;
        this.rotation = 0;
        this.currentTetromino = this.piece.rotations[this.rotation];

        this.x = this.piece.x;
        this.y = this.piece.y;
        this.offsetX = this.board.offsetX;
        this.offsetY = this.board.offsetY;
    }
    
    draw(ctx) {
        for (let r = 0; r < this.currentTetromino.length; r++) {
            for (let c = 0; c < this.currentTetromino[r].length; c++) {
                if (this.currentTetromino[r][c] && this.y + r >= this.offsetY) {
                    drawSquare(this.x + c + this.offsetX, this.y + r, this.color, ctx);
                }
            }
        }
    }

    undraw(ctx) {
        for (let r = 0; r < this.currentTetromino.length; r++) {
            for (let c = 0; c < this.currentTetromino[r].length; c++) {
                if (this.currentTetromino[r][c] && this.y + r < this.offsetY) {
                    eraseSquare(this.x + c + this.offsetX, this.y + r, "white", ctx);
                } else if (this.currentTetromino[r][c]) {
                    drawSquare(this.x + c + this.offsetX, this.y + r, "white", ctx);
                }
            }
        }
    }

    lock() {
        for (let r = 0; r < this.currentTetromino.length; r++) {
            for (let c = 0; c < this.currentTetromino[r].length; c++) {
                if (this.currentTetromino[r][c] && this.y + r >= this.offsetY) {
                    this.board.grid[this.y + r - this.offsetY][this.x + c] = this.color;
                }
            }
        }
    }

    moveDown(ctx) {
        if (!this.board.collision(0, 1, this.currentTetromino)) {
            this.board.scoreboard.addScore(4, ctx);
            this.undraw(ctx);
            this.y++;
            this.draw(ctx);
        } else {
            this.lock();
            this.board.clearLines(ctx);
            this.board.generateTetromino(ctx);
        }
    }

    moveRight(ctx) {
        if (!this.board.collision(1, 0, this.currentTetromino)) {
            this.undraw(ctx);
            this.x++;
            this.draw(ctx);
        }
    }

    moveLeft(ctx) {
        if (!this.board.collision(-1, 0, this.currentTetromino)) {
            this.undraw(ctx);
            this.x--;
            this.draw(ctx);
        }
    }

    rotate(ctx) {
        const nextRotation = (this.rotation + 1) % (this.piece.rotations.length)
        const nextTetromino = this.piece.rotations[nextRotation]

        while (this.board.collision(0, 0, nextTetromino) === "border") {
            this.undraw(ctx);
            if (this.x > this.board.column/2) {
                this.x--;
            } else {
                this.x++;
            }
        }

        if (!this.board.collision(0, 0, nextTetromino)) {
            this.undraw(ctx);
            this.rotation = nextRotation;
            this.currentTetromino = nextTetromino;
            this.draw(ctx);
        }
    }

    floor(ctx) {
        while (!this.board.collision(0, 1, this.currentTetromino)) {
            this.moveDown(ctx);
        }
        this.moveDown(ctx);
    }
}

export default Tetromino;