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
    //const noSpace = text.split(" ").join("").length;
    const noSpaceReplace = text.match(/[A-Za-z0-9]+/g);
    if (noSpaceReplace === noSpaceReplace) {
      const noPunctuationMarks = noSpaceReplace.join("").length;      
      return noPunctuationMarks;
    }
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    //la longitud caracteres sin espacios/numero de palabras
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
    //console.log(deleteLetter);
    let counter = 0;
    for(let index =0; index < deleteLetter.length; index++){
    counter+= parseFloat(deleteLetter[index]);
    }
   return counter;
  },
};

export default analyzer;