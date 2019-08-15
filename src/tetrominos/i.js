class I {
    constructor() {
        this.color = 'blue';
        this.rotations = [
            [
                [0, 1, 0, 0],
                [0, 1, 0, 0],
                [0, 1, 0, 0],
                [0, 1, 0, 0]
            ],
            [
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [1, 1, 1, 1],
            ]
        ]

        this.queueImage = [
            [1, 1, 1, 1],
        ]

        this.x = 4;
        this.y = 0;
    }
}

export default I;