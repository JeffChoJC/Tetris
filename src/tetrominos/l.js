class L {
    constructor() {
        this.color = 'gold';
        this.rotations = [
            [
                [0, 0, 0],
                [0, 1, 0],
                [0, 1, 0],
                [0, 1, 1]
            ],
            [
                [0, 0, 0],
                [0, 0, 0],
                [1, 1, 1],
                [1, 0, 0]
            ],
            [
                [0, 0, 0],
                [1, 1, 0],
                [0, 1, 0],
                [0, 1, 0]
            ],
            [
                [0, 0, 0],
                [0, 0, 1],
                [1, 1, 1],
                [0, 0, 0]
            ],
        ]

        this.queueImage = [
            [0, 0, 1],
            [1, 1, 1],
        ]

        this.x = 3;
        this.y = 0;
    }
}

export default L;