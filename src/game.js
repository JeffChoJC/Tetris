import Board from "./board";
import Scoreboard from './scoreboard';

class Game {
    constructor(ctx) {
        this.scoreboard = new Scoreboard(ctx);
        this.board = new Board(this.scoreboard, ctx);
        this.paused = false;

        document.addEventListener("keydown", e => this.pause(e, ctx))
    }

    start() {
        
    }

    pause(e, ctx) {
        if (e.key === "p" && this.paused === false) {
            clearInterval(this.board.timer)
            alert("Game is paused. Press enter, then any key to resume.");
            this.paused = true;
        } else if (this.paused === true) {
            this.board.timer = setInterval(() => this.board.drop(ctx), 1000);
            this.paused = false;
        }
    }
}

export default Game;