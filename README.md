# Tetris by Jeffrey
## Overview
*Tetris by Jeffrey* is a game that is functionally identical to *Tetris* but offers multiple color themes. The falling speed of tetrominos increases as the player ascendslevels. Players progress to higher levels by reaching specific point totals. The max level is 10.

For those that are unfamiliar with *Tetris*, there are 7 unique shapes (made of 4 blocks) called *tetrominos* that are selected at random and fall from the top of the playing field. These tetrominos can be rotated clockwise. The goal of the game is to form complete "lines" with the falling tetromino (no spaces). The completed "line(s)" will immediately be cleared from gameplay and effectively lower all blocks above the deleted rows. The game is over if any block exceeds the top of the playing field.

---

## Gameplay

<img src="./assets/images/gameplay.gif">

---

## Tetromino
Each tetromino is defined by its own class. Its respective constructor details the tetromino's color, rotations, queue image, and starting position.

```
class T {
    constructor() {
        this.color = 'plum';
        this.rotations = [
            [
                [0, 0, 0],
                [0, 0, 0],
                [0, 1, 0],
                [1, 1, 1],
                [0, 0, 0]
            ],
            [
                [0, 0, 0],
                [0, 0, 0],
                [0, 1, 0],
                [0, 1, 1],
                [0, 1, 0]
            ],
            [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0],
                [1, 1, 1],
                [0, 1, 0]
            ],
            [
                [0, 0, 0],
                [0, 0, 0],
                [0, 1, 0],
                [1, 1, 0],
                [0, 1, 0]
            ]
        ]

        this.queueImage = [
            [0, 1, 0],
            [1, 1, 1],
        ]
    
        this.x = 3;
        this.y = 0;
    }
}
```

---

## Functionality and MVP Features
- [x] Basic visuals
- [x] Players can:
    - [x] Move tetrominos left and right using the `"left"` and `"right`" keys
    - [x] Rotate tetrominos clockwise using the `"up"` key
    - [x] Accelerate the speed of falling tetrominos using the `"down"` key
    - [x] Instantly drop tetrominos using the `"space bar"`
- [x] Completed lines of blocks are deleted from gameplay
- [x] Players can view the next shape to be generated
- [x] Scoreboard displays `level` & `score`
- [x] Game:
    - [x] Can be paused/resumed
    - [x] Is over when a block exceed the top boundary of playing field

## Architecture and Technologies
* `Vanilla JavaScript`
    * Overall structure and game logic
* `HTML5 Canvas`
    * DOM manipulation and game rendering
* `Web Audio API`
    * Sound generation, processing, and control
* `Webpack`
    * Bundle and serve up various scripts

### Main Files
* `board.js`
* `tetrominos` folder
    * `tetromino.js`
    * `i.js`
    * `j.js`
    * `l.js`
    * `o.js`
    * `t.js`
    * `s.js`
    * `z.js`
* `game.js`
* `main.js`
* `scoreboard.js`
* `util.js`

---
## Wireframe

<img src="./assets/images/wireframe.png"/>

---
## Development Timeline
**Day 1**
- [x] Review JavaScript & Canvas
- [x] Research other applicable documentation (i.e. color themes)
- [x] Build basic project skeleton

**Day 2**
- [x] Create tetrominos
- [x] Implement shape manipulation/movement via keyboard

**Day 3**
- Build board logic
    - [x] Completed rows are deleted
    - [x] Aggregate line height calculation & **game over** logic
    - [x] Formulate scoring logic
    - [x] Implement time interval for falling shapes
    - [x] Increase level & shorten "fall interval" when specified scores are reached

**Day 4**
- Finish board logic
    - [x] Completed rows are deleted
    - [x] Aggregate line height calculation & **game over** logic
    - [x] Formulate scoring logic
    - [x] Implement time interval for falling shapes
    - [x] Increase level & shorten "fall interval" when specified scores are reached

**Day 5**
- [x] Styling

**Over the Weekend**
- [x] Test for bugs
- [x] Implement color theme palette

---
## Bonus Features
- [ ] Shadow that highlights falling shape's position-to-be