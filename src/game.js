import Board from "./board";

class Game {
    constructor(ctx) {
        this.board = new Board(ctx);
        this.paused = false;

        document.addEventListener("keydown", e => this.pause(e, ctx))
    }

    start() {
        
    }

    pause(e, ctx) {
        if (e.key === "p" && this.paused === false) {
            clearInterval(this.board.speed)
            alert("Game is paused. Press enter to resume.");
            this.paused = true;
        } else if (this.paused === true) {
            this.board.speed = setInterval(() => this.board.drop(ctx), 1000);
            this.paused = false;
        }
    }
}

export default Game;