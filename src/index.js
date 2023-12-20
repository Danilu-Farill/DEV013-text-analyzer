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
input.addEventListener("keyup", showText);

function reseText() {
    input.value ="";
    wordCount.innerHTML = wordCountPlaceHolder;
    wordLengthAverage.innerHTML = wordLengthAveragePlaceHolder;
    characterCount.innerHTML = characterCountPlaceHolder;
    characterNoSpacesCount.innerHTML = characterNoSpacesCountPlaceHolder;
    numberCount.innerHTML = numberCountPlacerHolder;
    numberSum.innerHTML = numberSumPlaceHolder;
}

let wordCountPlaceHolder = wordCount.innerHTML;
let characterCountPlaceHolder = characterCount.textContent;
let characterNoSpacesCountPlaceHolder = characterNoSpacesCount.innerHTML;
let wordLengthAveragePlaceHolder = wordLengthAverage.innerHTML; 
let numberCountPlacerHolder = numberCount.innerHTML;
let numberSumPlaceHolder = numberSum.innerHTML;


function showText(valor) {
    wordCount.innerHTML = wordCountPlaceHolder + analyzer.getWordCount(valor.target.value);
    characterCount.textContent = characterCountPlaceHolder + analyzer.getCharacterCount(valor.target.value);
    characterNoSpacesCount.innerHTML = characterNoSpacesCountPlaceHolder + analyzer.getCharacterCountExcludingSpaces(valor.target.value);
    wordLengthAverage.innerHTML = wordLengthAveragePlaceHolder + analyzer.getAverageWordLength(valor.target.value);
    numberCount.innerHTML = numberCountPlacerHolder + analyzer.getNumberCount(valor.target.value);
    numberSum.innerHTML = numberSumPlaceHolder + analyzer.getNumberSum(valor.target.value);
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