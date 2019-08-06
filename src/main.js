import Game from './game';

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.font = '18px Changa';

    const game = new Game(ctx);
})

