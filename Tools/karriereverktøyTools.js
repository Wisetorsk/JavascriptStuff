function getFavorites() {
    [...document.getElementsByClassName("anticon anticon-menu")][0].click()
    return [...document.getElementsByClassName("row without-thumbnail")].map(i => i.getElementsByClassName("title")[0].innerHTML);
}

function makeCSV(arr) {
    let textData = "" + arr.map(i => i + '\n');
    return textData;
}

function downloadData(data) {
    let outputData = new Blob([data], {type: 'text/csv'});
    let url = window.URL.createObjectURL(outputData);
    let a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    a.href = url;
    a.download = "mineFavoritter.csv";
    a.click();
    a.parentNode.removeChild(a);
}

function createComparison(arr) {
    let output = [];
    for (let el of arr) {
        output.push({title: el, score: parseInt(window.prompt(el + '     score 1 - 9'))})
    }
    return output
}

function makeScoreCSV(arr) {
    let textData = "" + arr.map(i => i.title + ',' + i.score);
    return textData;
}

function removeDups(names) {
    let unique = {};
    names.forEach(function(i) {
      if(!unique[i]) {
        unique[i] = true;
      }
    });
    return Object.keys(unique);
  }

function removeLowest(threshold, arr) {
    let out = [];
    for (let i of arr) {
        if (i.score >= threshold) {
            out.push(i);
        }
    }
return out;
}