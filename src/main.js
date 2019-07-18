import Game from './game';

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.font = '22px Changa';

    const audioContext = new AudioContext();
    const audioElement = document.querySelector('audio');
    const track = audioContext.createMediaElementSource(audioElement);
    track.connect(audioContext.destination);

    const game = new Game(ctx);
})

