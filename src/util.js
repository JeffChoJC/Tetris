export const drawSquare = (x, y, color, ctx) => {
    const square = 25;

    ctx.fillStyle = color;
    ctx.fillRect(x * square, y * square, square, square);
    ctx.strokeStyle = 'black';
    ctx.strokeRect(x * square, y * square, square, square);
}

export const drawScore = (score, ctx) => {
    debugger
    ctx.clearRect(0, 0, 140, 100);
    ctx.fillStyle = "black";
    ctx.fillText("Score: " + score, 8, 40);
}

export const drawLevel = (level, ctx) => {
    ctx.fillStyle = "black";
    ctx.fillText("Level:  " + level, 8, 20);
}