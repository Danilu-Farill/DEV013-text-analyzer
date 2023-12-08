import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
const input = document.getElementsByName("user-input");
const button = document.getElementById("reset-button");

button.addEventListener("click",reset);


function reset() {
    input.value="";
    console.log(input);
}
/*function time() {
    console.log("hola");    
}
setTimeout(time, 4000);
let clock = function(){
    let date = new Date()
    console.log(`${date.getHours()}: ${date.getMinutes()}: ${date.getSeconds()}`);
}

setInterval(clock, 4000);*/