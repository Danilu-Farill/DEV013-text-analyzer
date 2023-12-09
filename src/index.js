import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
const button = document.getElementById("reset-button");
const input = document.querySelector("textarea[name='user-input']");
//const input = document.getElementById("user-input");
button.addEventListener("click",reseText);

function reseText() {
    input.value ="";
}

//const textInput = 


/*function time() {
    console.log("hola");    
}
setTimeout(time, 4000);
let clock = function(){
    let date = new Date()
    console.log(`${date.getHours()}: ${date.getMinutes()}: ${date.getSeconds()}`);
}

setInterval(clock, 4000);*/