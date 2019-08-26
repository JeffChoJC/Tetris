import Board from "./board";

class Game {
    constructor(ctx) {
        this.board = new Board(ctx);
        this.started = false;
        this.paused = false;
        this.music = new Audio('./assets/theme_song.mp3');
        
        let modal = document.getElementsByClassName('controls-background');
        document.getElementById('close-controls-button').onclick = () => modal[0].classList.toggle('hidden');
        document.getElementById('mute-check').onchange = () => this.mute();
        document.getElementById('play-button').addEventListener("click", () => this.start(ctx));
        document.getElementById('restart').addEventListener("click", () => this.restart(ctx));
        document.addEventListener("keydown", e => this.pause(e, ctx));
    }

    start(ctx) {
        if (this.started === false) {
            this.board.speed = setInterval(() => this.board.drop(ctx), 820);
            this.started = true;
            this.board.controlsEnabled = true;

            this.music.loop = true;
            this.music.play();
        }
    }

    pause(e, ctx) {
        if (e.key === "p" && this.paused === false) {
            clearInterval(this.board.speed)
            alert('Game is paused. Press OK and any key to resume.');
            this.paused = true;
        } else if (this.paused === true) {
            const interval = 900 - (this.board.scoreboard.level * 80);
            this.board.speed = setInterval(() => this.board.drop(ctx), interval);
            this.paused = false;
        }
    }

    restart(ctx) {
        if (confirm("Are you sure you want to restart?")) {
            location.reload();
        }	
    }

    mute() {
        let checked = document.getElementById('mute-check').checked
        
        if (checked === true) {
            this.music.muted = true;
        } else {
            this.music.muted = false;
        }
    }
}

export default Game;