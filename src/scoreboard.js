import { drawScore, drawLevel } from './util';

class Scoreboard {
    constructor(board, ctx){
        this.board = board;

        this.currentScore = 0;
        this.level = 1;
        this.interval = 1000 - (this.level * 50)
    }

    addScore(points, ctx) {
        this.currentScore += points;
        this.levelUp();
        drawScore(this.currentScore, "black", ctx);
        drawLevel(this.level, "black", ctx);
    }

    levelUp(ctx) {
        if ((this.currentScore > (this.level * 2500)) && this.level < 10) {
            this.level++;
            clearInterval(this.board.timer);
            this.board.speed = setInterval(() => this.board.drop(ctx), this.interval);
        } 
    }
}

export default Scoreboard;