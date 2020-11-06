class Canvas {
    constructor(parent, scale=null, newId="ConstructedCanvas", atOnce=false) {
        /*
        Variables
            [parent] - DOM element to insert Canvas
            [scale] - Width and height of Canvas as a scale object => "scale = {width: 100, height: 100}"
            [newId] - Id of constructed Canvas element
            [atOnce] - Determines if the lines defined will be drawn one by one as the lines are defined, or all at once after definition
        */
        try {
            if (typeof(parent) != null) {
                this.parent = parent;
            } else {
                /*Throw some error*/
            }

            this.newId = newId;
            this.ctx = undefined;
            this.atOnce = atOnce;
            this.lineWidth = 2;
            this.color = "black";

            if (scale == null) {
                this.scale = {width: 1000, height: 800}
            } 
            else {
                if (typeof(scale) == "object" && Object.values(scale).length == 2) {
                    for (var identifier in scale) {
                        if (identifier.toLowerCase() == "width" || identifier.toLowerCase() == "height") {
                            continue;
                        } else {
                            throw "Incorrect scale object notations =>\t'" + identifier +"'";
                        }
                    }
                } 
                else {
                    throw "Scale is not defined correctly, use scale={width: [width in px], height: [height in px]}";
                }
                this.scale = scale;
            }
        } 
        catch(err) {
            console.log(err);
            return false;
        }
    }

    build() {
        /*
        Builds the canvas element in parent element
        */
        this.display = document.createElement("canvas");
        this.display.id = this.newId;
        this.display.style = "border:1px solid black";
        this.display.width = this.scale.width;
        this.display.height = this.scale.height;
        this.parent.appendChild(this.display);
        this.createCTX();
        //return this.ctx;
    }

    setLinewidth(width) {
        (Number.isInteger(width)) ? this.lineWidth = width : this.errorOut("Number is not int");
    }

    setStrokeColor(color) {
        this.color = color;
        this.ctx.strokeStyle = this.color;
    }

    errorOut(err) {
        throw err;
    }

    createCTX() {
        this.ctx = document.getElementById(this.newId).getContext("2d");
    }

    controlCTX() {
        if (this.ctx == undefined) {
            throw "Run build before adding elements";
        } else {
            return true;
        }
    }

    rect(originX, originY, length, height, fill=false) {
        /*Draws a rectangle*/
        if (this.controlCTX()) {
            this.ctx.beginPath();
            this.ctx.rect(originX, originY, length, height);
            (fill) ? this.ctx.fill() : this.ctx.stroke();
        }
    }

    circle(radius, x, y, fill=false) {
        if (this.controlCTX()) {
            this.ctx.beginPath();
            this.ctx.arc(x, y, radius, 0, 2*Math.PI);
            (fill) ? this.ctx.fill() : this.ctx.stroke();
        }
    }

    line(x1, y1, x2, y2) {
        this.ctx.lineWidth = this.lineWidth;
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x2, y2);
        (!this.atOnce) ? this.ctx.stroke() : confirm;
    }

    draw() {
        this.ctx.stroke();
    }

    clear() {
        this.ctx.clearRect(0, 0, this.scale.width, this.scale.height);
    }

    polygon(vertexList) {
        /* 
        Draws a polygon from a given list of verteces 
        Each entry in the list is a list with the following structure: 
        [x1, y1, x2, y2]
        */
       this.ctx.beginPath();
        for (var vertex of vertexList) {
            this.line(vertex[0], vertex[1], vertex[2], vertex[3]);
        }
        console.log("DONE")
    }

    updateScreenPolygons(elements=undefined) {
        if (elements == undefined) {
            throw "Please provide a list of elements to update."
        } else {
            this.clear(); /* Clear the entire canvas to ready it for update */
            for (var el of elements) {
                /* el now contains one given element to be inserted into the canvas */
                this.polygon(el);
            }
        }
    }

    add(inputElement, subparent = null) {
        /* This method controls that the given element "inputElement" is a valid element within CANVAS and inserts it within the constructed canvas */
        try {
            /* Check if the inputElement is a valid Canvas element */
            //if (inputElement == )
            /* Control if the method has been given a sub element */
            if (subparent != null && subparent != undefined) {
                /* Check if given sub element is valid */
            } else {
                /* Insert directly into the default canvas */
                
            }
        } catch(err) {
            console.log(err);
            return false;
        }
        return true;
    }

    pixelMap(dataset) {
        const imgData = new Uint8ClampedArray(this.scale.width * this.scale.height * 4);
        if (dataset.length === imgData.length) { // RGBA
            for (let i = 0; i < imgData.length; i += 4) {
                imgData[i + 0] = dataset[i + 0]; // R
                imgData[i + 1] = dataset[i + 1]; // G 
                imgData[i + 2] = dataset[i + 2]; // B
                imgData[i + 3] = dataset[i + 3]; // A
                index++;
            }
        } else { // GREYSCALE
            let index = 0;
            for (let i = 0; i < imgData.length; i += 4) {
                imgData[i + 0] = dataset[index];
                imgData[i + 1] = dataset[index];
                imgData[i + 2] = dataset[index];
                imgData[i + 3] = 255;
                index++;
            }
        }
        let image = new ImageData(imgData, this.width);
        this.ctx.putImageData(image, 0, 0);
    }

    // -------------------------------------------------------------------------------------------------------
    // Static Methods

    static generateHexagon(r, x, y) {
        var cordinates = [];
        for (let i = 1; i < 7; i++) {
            cordinates.push([Math.cos((60*i)*Math.PI/180)*r + x, Math.sin((60*i)*Math.PI/180)*r + y])
        }
        return cordinates;
    }

    static translateToVertex(li) {
        /* Translates individual points to cordinate pairs that designate a line
            Pairs are written as a nested list like this: [[x1, y1], [x2, y2], [x3, y3] ...] */ 

        var output = [];
        for (var entry in li) {
            var index = parseInt(entry);
            (entry == li.length-1) ? 
            output.push( [li[index][0], li[index][1], li[0][0], li[0][1]] ) : 
            output.push( [li[index][0],li[index][1], li[index+1][0], li[index+1][1]] );
        }
        return output;
    }
}




