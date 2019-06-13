import { drawSquare } from '../util';
import I from './i';
import J from './j';
import L from './l';
import O from './o';
import S from './s';
import Z from './z';
import T from './t';

class Tetromino {
    constructor(board, ctx) {
        this.board = board;

        switch (Math.floor(Math.random() * 7)) {
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
                this.piece = new Z();
                break;
            case 6:
                this.piece = new T();
        }

        this.color = this.piece.color;
        this.rotation = 0;
        this.currentTetromino = this.piece.rotations[this.rotation];

        this.x = this.piece.x;
        this.y = this.piece.y;

        this.draw(ctx);
        this.drop(ctx);
        this.control = this.control.bind(this)

        document.addEventListener("keydown", e => this.control(e, ctx));
    }
    
    draw(ctx) {
        for (let r = 0; r < this.currentTetromino.length; r++) {
            for (let c = 0; c < this.currentTetromino[r].length; c++) {
                if (this.currentTetromino[r][c]) {
                    drawSquare(this.x + c, this.y + r, this.color, ctx);
                }
            }
        }
    }

    undraw(ctx) {
        for (let r = 0; r < this.currentTetromino.length; r++) {
            for (let c = 0; c < this.currentTetromino[r].length; c++) {
                if (this.currentTetromino[r][c]) {
                    drawSquare(this.x + c, this.y + r, "white", ctx);
                }
            }
        }
    }

    moveDown(ctx) {
        this.undraw(ctx);
        this.y++;
        this.draw(ctx);
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
        const next = this.piece.rotations[(this.rotation + 1) % (this.piece.rotations.length)]
        if (!this.board.collision(0, 0, next)) {
            this.undraw(ctx);
            this.rotation = (this.rotation + 1) % (this.piece.rotations.length);
            this.currentTetromino = this.piece.rotations[this.rotation];
            this.draw(ctx);
        }
    }

    drop(ctx) {
        setInterval(() => {
            this.moveDown(ctx);
        }, 1000);
    }

    control(e, ctx) {
        switch (e.key) {
            case "ArrowRight":
                this.moveRight(ctx);
                break;
            case "ArrowLeft":
                this.moveLeft(ctx);
                break;
            case "ArrowUp":
                this.rotate(ctx);
                break;
            case "ArrowDown":
                this.moveDown(ctx);
        }
    }
}

export default Tetromino;