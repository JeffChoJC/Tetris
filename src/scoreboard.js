import { drawScore, drawLevel } from './util';

class Scoreboard {
    constructor(ctx){
        this.currentScore = 10000;
        this.level = 1;
    }

    addScore(points, ctx) {
        this.currentScore += points;
        this.levelUp();
        drawScore(this.currentScore, "black", ctx);
        drawLevel(this.level, "black", ctx);
    }

    levelUp() {
        debugger
        if ((this.currentScore > (this.level * 2500)) && this.level < 10) {
            this.level++;
        } 
    }
}

export default Scoreboard;