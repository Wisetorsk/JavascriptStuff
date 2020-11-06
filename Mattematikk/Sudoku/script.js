/* Calls and manages game.js */

class Display {
    /* Writes to the page and generates the html elements */
    constructor(xDim=9, yDim=9, dispId="defaultSudoku") {
        this.dom = document.body;
        this.gameWindow = false;
    }

    _addGameWindow() {
        this.gameWindow = document.createElement("div");
        this.gameWindow.id = dispId;
        this.dom.appendChild(this.gameWindow);
        this.dom.classList.add("Added");
        this.gameWindow.classList.add("added");
    }

    build() {

    }
}