import { drawScore, drawLevel } from './util';

class Scoreboard {
    constructor(board, ctx){
        this.board = board;

        this.currentScore = 15999;
        this.level = 1;
        this.interval = 1000;
    }

    addScore(points, ctx) {
        this.currentScore += points;
        this.levelUp(ctx);
        drawScore(this.currentScore, "black", ctx);
        drawLevel(this.level, "black", ctx);
    }

    levelUp(ctx) {
        if ((this.currentScore > (this.level * 2000)) && this.level < 10) {
            this.level++;
            this.interval -= 100;
            debugger
            clearInterval(this.board.speed);
            this.board.speed = setInterval(() => this.board.drop(ctx), this.interval);
        } 
    }
}

export default Scoreboard;