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
input.addEventListener("input", showText);

function reseText() {
  input.value ="";
  wordCount.innerHTML = "RECUENTO DE PALABRAS: ";
  wordLengthAverage.innerHTML = "LONGITUD MEDIA DE PALABRAS: ";
  characterCount.innerHTML = "RECUENTO DE CARACTERES: ";
  characterNoSpacesCount.innerHTML = "RECUENTO DE CARACTERES SIN ESPACIOS Y SIGNOS DE PUNTUACIÓN: ";
  numberCount.innerHTML = "RECUENTO DE NÚMEROS: ";
  numberSum.innerHTML = "SUMA TOTAL DE NÚMEROS: ";
}
const wordLengthAveragePlaceHolder = wordLengthAverage.innerHTML; 
const numberSumPlaceHolder = numberSum.innerHTML;

function showText(valor) {
  wordCount.innerHTML = "RECUENTO DE PALABRAS: " + analyzer.getWordCount(valor.target.value);
  characterCount.textContent = input.innerHTML + "RECUENTO DE CARACTERES: " + analyzer.getCharacterCount(valor.target.value);
  characterNoSpacesCount.innerHTML = input.innerHTML + "RECUENTO DE CARACTERES SIN ESPACIOS Y SIGNOS DE PUNTUACIÓN: " + analyzer.getCharacterCountExcludingSpaces(valor.target.value);
  wordLengthAverage.innerHTML = input.innerHTML + wordLengthAveragePlaceHolder + analyzer.getAverageWordLength(valor.target.value);
  numberCount.innerHTML = input.innerHTML + "RECUENTO DE NÚMEROS: " + analyzer.getNumberCount(valor.target.value);
  numberSum.innerHTML = input.innerHTML + numberSumPlaceHolder + analyzer.getNumberSum(valor.target.value);
}