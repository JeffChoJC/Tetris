export const drawSquare = (x, y, color, ctx) => {
    const square = 25;

    ctx.fillStyle = color;
    ctx.fillRect(x * square, y * square, square, square);
    ctx.strokeStyle = 'black';
    ctx.strokeRect(x * square, y * square, square, square);
}

export const drawQueueSquare = (x, y, color, ctx) => {
    const square = 18;

    ctx.fillStyle = color;
    ctx.fillRect(x * square, y * square, square, square);
    ctx.strokeStyle = 'black';
    ctx.strokeRect(x * square, y * square, square, square);
}

export const drawScore = (score, ctx) => {
    ctx.clearRect(0, 80, 149, 100);
    ctx.fillStyle = "white";
    ctx.fillText("Score: " + score, 20, 140);
}

export const drawLevel = (level, ctx) => {
    ctx.fillStyle = "white";
    ctx.fillText("Level:  " + level, 20, 120);
}