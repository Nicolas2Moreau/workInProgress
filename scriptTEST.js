// function initBtn(){
// var button = document.getElementById("btn");
// button.onclick = setStyleSheet('styleTEST.css');
// };

// window.button.addEventListener('click', event => {
//     setStyleSheet('styleTESTdark.css');
// });

function swapCss() {
    var stylesheet = document.getElementById("css");
    var state = stylesheet.getAttribute("href");
    if (state === "styleTEST.css") {
        stylesheet.setAttribute('href', "styleTESTdark.css");
    } else {
        stylesheet.setAttribute('href', "styleTEST.css");
    }
}