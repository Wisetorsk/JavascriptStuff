class Board {
    constructor() {
        this.cells = [];
        this.xDim = 9;
        this.yDim = 9;
        this._build();
    }

    _build() {
        for (let i = 0; i < this.xDim; i++) {
            let row = [];
            for (let j = 0; j < this.yDim; j++) {
                row.push(new Cell(i, j));
            }
            this.cells.push(row);
        }
    }
}