export const drawSquare = (x, y, color, ctx) => {
    const square = 25;

    ctx.fillStyle = color;
    ctx.fillRect(x * square, y * square, square, square);
    ctx.strokeStyle = 'black';
    ctx.strokeRect(x * square, y * square, square, square);
}

export const drawScore = (score, color, ctx) => {
    ctx.clearRect(0, 0, 120, 100);
    ctx.font = "16px Times New Roman";
    ctx.fillStyle = color;
    ctx.fillText("Score: " + score, 8, 20);
}

export const drawLevel = (level, color, ctx) => {
    ctx.clearRect(8, 30, 100, 100);
    ctx.font = "16px Times New Roman";
    ctx.fillStyle = color;
    ctx.fillText("Level: " + level, 8, 35);
}