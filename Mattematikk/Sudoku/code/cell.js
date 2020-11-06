class Cell {
    constructor(x, y, realValue=false, setValue=false) {
        this.realValue = realValue;
        this.setValue = setValue;
        this.x = x;
        this.y = y;
    }

    changePosition(newX, newY) {
        this.x = newX;
        this.y = newY;
    }

    enterValue(newValue) {
        this.setValue = newValue;
    }

    setRealValue(newValue) {
        this.realValue = newValue;
    }

    control() {
        return (this.setValue == this.realValue);
    }
}