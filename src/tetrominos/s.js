class S {
    constructor() {
        this.color = 'orange';
        this.rotations = [
            [
                [0, 0, 0],
                [0, 0, 0],
                [0, 1, 1],
                [1, 1, 0]
            ],
            [
                [0, 0, 0],
                [0, 1, 0],
                [0, 1, 1],
                [0, 0, 1]
            ]
        ]

        this.queueImage = [
            [0, 1, 1],
            [1, 1, 0],
        ]

        this.x = 3;
        this.y = 0;
    }
}

export default S;