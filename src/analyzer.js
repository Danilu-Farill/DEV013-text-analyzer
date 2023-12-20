const analyzer = {  
  getWordCount: (text) => {
    const word = text.split(" ").length;
    return  word;
  },
  getCharacterCount: (text) => {
    const character = text.length;
    return character;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //Falta excluir signos
    let noSpace = text.split(" ").join("").length;
    const noSpaceReplace = text.match(/[a-z]+/g);
    console.log(noSpaceReplace);
    return noSpace;
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    /*let longitud = character/word;
    console.log(longitud);/*///RECTIFICAR
    const lengthMedium =  text.split(" ").join("").length/text.split(" ").length;
    return lengthMedium;
  },
  getNumberCount: (text) => {
    const matchNumber = /(\d+)/g;
    const matchLength = text.match(matchNumber).length;//los lee pero 
    return matchLength;
  },
  getNumberSum: (text) => {
    const replaceString= /(\d+)/g;
    const deleteLetter = text.match(replaceString);
    console.log(deleteLetter);
    let counter = 0;
    for(let index =0; index < deleteLetter.length; index++){
    counter+= parseInt(deleteLetter[index]);
    }
   return counter;
  },
};

export default analyzer;