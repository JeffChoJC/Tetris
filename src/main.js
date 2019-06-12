import Board from './board';
import Tetromino from './tetrominos/tetromino';

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const board = new Board(ctx);
})

