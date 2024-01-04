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
    const noSpaceReplace = text.match(/[A-Za-z0-9]+/g);
    if (noSpaceReplace === noSpaceReplace) {
      const noPunctuationMarks = noSpaceReplace.join("").length;   
      return noPunctuationMarks;
    }
  },
  getAverageWordLength: (text) => {  
    const character = text.split(" ").join("").length;
    const word = text.split(" ").length;
    const lengthMedium = character/word;
    const lengthMediumFixed = lengthMedium.toFixed(2);
    return Number(lengthMediumFixed);
  },
  getNumberCount: (text) => {
    const word = text.split(" ");
    let suma = 0;
    for (let index = 0; index < word.length; index++) { 
      const element = word[index].replace(/\.$/, ""); 
      if (!isNaN(element) && element !== ""){
        suma++;
      }
    }
    return suma;
  },
  getNumberSum: (text) => {
    const splitNumber = text.split(" ");
    let counter = 0;
    for(let index=0; index < splitNumber.length; index++){
      const element = splitNumber[index].replace(/\.$/, "");
      if(!isNaN(element) && element !== ""){
        counter += parseFloat(element);
      }
    }
    return counter;
  },
};

export default analyzer;