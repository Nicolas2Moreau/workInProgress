function initBtn(){
var button = document.getElementById("btn");
button.onclick = setStyleSheet('styleTEST.css');
};

// window.button.addEventListener('click', event => {
//     setStyleSheet('styleTESTdark.css');
// });

function setStyleSheet(url) {
    var stylesheet = document.getElementById("css");
    stylesheet.setAttribute('href', url);
}