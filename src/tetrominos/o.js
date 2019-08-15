class O {
    constructor() {
        this.color = 'red';
        this.rotations = [
            [
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 1, 1, 0],
                [0, 1, 1, 0],
            ]
        ]

        this.queueImage = [
            [0, 1, 1],
            [0, 1, 1],
        ]

        this.x = 4;
        this.y = 0;
    }
}

export default O;