const rectangleWrap = document.getElementById('rectangle-wrapper');
const individualWraps = document.getElementsByTagName('individual-wraps');
const div = document.getElementsByTagName('DIV')
const squareIds = rectangleWrap.children;

let showIDs = (func) => {
  for(divs of squareIds) {
        console.log(`The Square ID's are ${divs.firstElementChild.id}`)
    }
}

showIDs( window.onload)