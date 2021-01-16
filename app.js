const rectangleWrap = document.getElementById('rectangle-wrapper');
const individualWraps = document.getElementsByTagName('individual-wraps');
const div = document.getElementsByTagName('DIV')
const squareIds = rectangleWrap.children;

let showIDs = (func) => {
    console.log(`The Squares ID's are`)
  for(divs of squareIds) {
        console.log(` ${divs.firstElementChild.id}`)
    }
}

showIDs( window.onload)