import analyzer from './analyzer.js';

const button = document.getElementById("reset-button");
const input = document.querySelector("[name='user-input']");
const wordCount = document.querySelector("[data-testid='word-count']");
const characterCount = document.querySelector("[data-testid='character-count']");
const characterNoSpacesCount= document.querySelector("[data-testid='character-no-spaces-count']");
const numberCount = document.querySelector("[data-testid= 'number-count']");
const numberSum = document.querySelector("[data-testid= 'number-sum']");
const wordLengthAverage = document.querySelector("[data-testid= 'word-length-average']");

button.addEventListener("click",reseText);
input.addEventListener("input", showText);//cambie key up por input

function reseText() {
    input.value ="";
    wordCount.innerHTML = "RECUENTO DE PALABRAS: ";
    wordLengthAverage.innerHTML = "LONGITUD MEDIA DE PALABRAS: ";
    characterCount.innerHTML = "RECUENTO DE CARACTERES: ";
    characterNoSpacesCount.innerHTML = "RECUENTO DE CARACTERES SIN ESPACIOS Y SIGNOS DE PUNTUACIÓN: ";
    numberCount.innerHTML = "RECUENTO DE NÚMEROS: ";
    numberSum.innerHTML = "SUMA TOTAL DE NÚMEROS: ";
}
//const wordCountPlaceHolder = wordCount.innerHTML;
//const characterCountPlaceHolder = characterCount.textContent;
//const characterNoSpacesCountPlaceHolder = characterNoSpacesCount.innerHTML;
const wordLengthAveragePlaceHolder = wordLengthAverage.innerHTML; 
//const numberCountPlacerHolder = numberCount.innerHTML;
const numberSumPlaceHolder = numberSum.innerHTML;

function showText(valor) {
    wordCount.innerHTML = "RECUENTO DE PALABRAS: " + analyzer.getWordCount(valor.target.value);
    characterCount.textContent = input.innerHTML + "RECUENTO DE CARACTERES: " + analyzer.getCharacterCount(valor.target.value);
    characterNoSpacesCount.innerHTML = input.innerHTML + "RECUENTO DE CARACTERES SIN ESPACIOS Y SIGNOS DE PUNTUACIÓN: " + analyzer.getCharacterCountExcludingSpaces(valor.target.value);
    wordLengthAverage.innerHTML = input.innerHTML + wordLengthAveragePlaceHolder + analyzer.getAverageWordLength(valor.target.value);
    numberCount.innerHTML = input.innerHTML + "RECUENTO DE NÚMEROS: " + analyzer.getNumberCount(valor.target.value);
    numberSum.innerHTML = input.innerHTML + numberSumPlaceHolder + analyzer.getNumberSum(valor.target.value);
}

/*function showText(valor) {//con esto me aparece lo que voy a escribiendo pero se repiten las letras
    //analyzer.getCharacterCount(valor.target.value);
    characterCount.textContent = characterCountPlaceHolder + analyzer.getCharacterCount(valor.target.value);
    //characterCount.textContent = analyzer.getCharacterCount(valor.target.value);
    characterNoSpacesCount.innerHTML += ` ${valor.target.value}`;
    numberCount.innerHTML += ` ${valor}`;
    wordLengthAverage.innerHTML += ` ${valor}`;
    numberSum.innerHTML+= ` ${valor}`;
}
 */

/*

function showText(valor) {//con esto me aparece lo que voy a escribiendo pero se repiten las letras
    analyzer.getCharacterCount(valor.target.value);
}

function textareaValue(valor) {
    //characterCount.textContent = characterCountPlaceHolder + valor.target.value.length;
    //characterCount.textContent = analyzer.getCharacterCount(valor.target.value);//esta es modificando el html y css para aparecer individual
    characterNoSpacesCount.innerHTML += ` ${valor.target.value}`;
    numberCount.innerHTML += ` ${valor}`;
    wordLengthAverage.innerHTML += ` ${valor}`;
    numberSum.innerHTML+= ` ${valor}`;
    showText();
}
*/
/*
function wordCountFunction(){

    setTimeout(function() { 
        let valor = document.querySelector("[name='user-input'");
        let respuesta = document.querySelector("[data-testid='word-count']");
        let total = valor.value.length;
        document.querySelector("[data-testid='word-count']").innerHTML = total;
       // wordCount.textContent += ` ${input.value.length}`;
    });
    }
*/