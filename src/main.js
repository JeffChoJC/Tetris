import Board from './board';
import Tetromino from './tetrominos/tetromino';

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const board = new Board();
    board.draw(ctx);
    
    const tetromino = new Tetromino();
    tetromino.draw(ctx);
    tetromino.drop(ctx);
})

