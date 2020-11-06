class Editor {
    constructor(parentId=false) {
        this.editingDom = (parentId) ? document.getElementById(parentId) : document.body;

    }

    /* Methods
        - Different methods to add elements. Maybe one per element type and one "universal"

    */

    insertElement(elementTypeName, content, location, newId="default", newClassList=false, styleText=false) {
        let parent;
        if (typeof(location) == "string") {
            parent = document.getElementById(location);
        } else if (typeof(location) == "object") {
            parent = location;
        } else {
            parent = this.editingDom;
        }
        let textContent = document.createTextNode(content);
        let element = document.createElement(elementTypeName);
        element.appendChild(textContent);
        element.id = newId;
        if (newClassList) {
            newClassList.forEach(i => element.classList.add(i))
        }
        listToInsert.style = (styleText) ? styleText : "";
        parent.appendChild(element);
    }

    /*insertTitle(titleText) {
        let titleElement = document.createElement("title");
        let titleWithText = document.createTextNode(titleText)
        titleElement.appendChild(titleWithText);
        document.head.appendChild(titleElement);
    }*/

    static changeTitle(newText) {
        document.head.getElementsByTagName("title")[0].innerHTML = newText;
    }

    insertLink(url, text, location, newId="default", newClassList=false, styleText=false, target="_blank") {
        let parent;
        if (typeof(location) == "string") {
            parent = document.getElementById(location);
        } else if (typeof(location) == "object") {
            parent = location;
        } else {
            parent = this.editingDom;
        }
        let linkElement = document.createElement("a");
        linkElement.appendChild(document.createTextNode(text));
        linkElement.href = url;
        linkElement.id = newId;
        linkElement.target = target;
        linkElement.style = (styleText) ? styleText : "";
        if (newClassList) {
            newClassList.forEach(i => linkElement.classList.add(i))
        }
        parent.appendChild(linkElement);
    }

    removeItem(id=false) {
        this.editingDom.removeChild(id);
    }

    removeAllTag(tagType) {
        [...this.editingDom.getElementsByTagName(tagType)].forEach(i => i.parentNode.removeChild(i));
    }

    insertList(location, content, type="ul", listId="Default", header=false, classList=false, styleText=false) {
        let parent;
        if (typeof(location) == "string") {
            parent = document.getElementById(location);
        } else if (typeof(location) == "object") {
            parent = location;
        } else {
            parent = this.editingDom;
        }

        let listType = (type == "ol") ? "ol" : "ul";

        let listToInsert = document.createElement(listType);
        listToInsert.id = listId;

        if (newClassList) {
            newClassList.forEach(i => listToInsert.classList.add(i))
        }

        listToInsert.style = (styleText) ? styleText : "";

        if (header) {
            listToInsert.appendChild(document.createTextNode(header))
        }

        for (let element of content) {
            let item = document.createElement("li");
            let textContent = document.createTextNode(element);
            item.appendChild(textContent);
            listToInsert.appendChild(item);
        }
        parent.appendChild(listToInsert);
    }

    insertCanvas(canvasId="defaultCanvas", wSize=800, hSize=600, style=false, parentElement=false, parentId=false) {
        let canvasElement = document.createElement("canvas");
        canvasElement.id = canvasId;
        canvasElement.width = wSize;
        canvasElement.height = hSize;
        canvasElement.style = (style) ? style : "";
        
        if (parentElement) {
            parentElement.appendChild(canvasElement);
        } else if (parentId) {
            let parent = document.getElementById(parentId);
            parent.appendChild(canvasElement);
        } else {
            this.editingDom.appendChild(canvasElement);
        }
        return canvasElement.getContext("2d");
    }
}