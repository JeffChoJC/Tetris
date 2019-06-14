import Board from "./board";

class Game {
    constructor(ctx) {
        this.board = new Board(ctx);
        this.paused = false;

        document.addEventListener("keydown", e => this.pause(e, ctx))
    }

    start(e, ctx) {
        debugger
        if (e.key === "p" && this.paused === false) {
            clearInterval(this.board.timer)
            this.paused = true;
        } else if (e.key === "p" && this.paused === true) {
            this.board.drop(ctx);
            this.board.timer = setInterval(() => this.board.drop(ctx), 1000);
            this.paused = false;
        }
    }

    pause() {

    }
}

export default Game;