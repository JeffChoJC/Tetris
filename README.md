# Tetris by Jeffrey
## Overview
*Tetris by Jeffrey* is a game that is functionally identical to *Tetris* but offersmultiple color themes. The falling speed of blocks increases as the player ascendslevels. Players progress to higher levels by reaching specific point totals. Themax level is 10.

For those that are unfamiliar with *Tetris*, there are 7 unique shapes (made of 4 blocks) that are selected at random and fall from the top of the playing field. These shapes can be rotated clockwise. The goal of the game is to form complete "lines" with the falling shapes (no spaces). The completed "line(s)" will immediately be cleared from gameplay and effectively lower all blocks above the deleted rows. The game is over if any block exceeds the top of the playing field.

---

## Functionality and MVP Features
- [ ] Basic visuals
- [ ] Players can:
    - [ ] Move shapes left and right using the `"left"` and `"right`" keys
    - [ ] Rotate shapes clockwise using the `"up"` key
    - [ ] Accelerate the speed of falling shapes using the `"down"` key
    - [ ] Instantly drop shapes using the `"space bar"`
- [ ] Completed lines of blocks are deleted from gameplay
- [ ] Players can view the next shape to be generated
- [ ] Scoreboard displays `level`, `score`, and `high scores` (top 5)
- [ ] Game:
    - [ ] Can be paused/resumed
    - [ ] Is over when a block exceed the top boundary of playing field

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
* `shapes` folder
    * `i.js`
    * `j.js`
    * `l.js`
    * `o.js`
    * `t.js`
    * `s.js`
    * `z.js`
* `player.js`
* `scoreboard.js`

---
## Development Timeline
**Day 1**
- [ ] Review JavaScript & Canvas
- [ ] Research other applicable documentation (i.e. color themes)
- [ ] Build basic project skeleton

**Day 2**
- [ ] Create shapes
- [ ] Implement shape manipulation/movement via keyboard

**Day 3**
* Build board logic
    - [ ] Completed rows are deleted
    - [ ] Aggregate line height calculation & **game over** logic
    - [ ] Implement time interval for falling shapes
    - [ ] Increase level & shorten "fall interval" when specified scores are reached

**Day 4**
- Finish board logic
    - [ ] Completed rows are deleted
    - [ ] Aggregate line height calculation & **game over** logic
    - [ ] Implement time interval for falling shapes
    - [ ] Increase level & shorten "fall interval" when specified scores are reached

**Day 5**
- [ ] Formulate scoring logic
- [ ] Build `high scores` table

**Over the Weekend**
- [ ] Test for bugs
- [ ] Implement color theme palette

---
## Bonus Features
* Shadow that highlights falling shape's position-to-be