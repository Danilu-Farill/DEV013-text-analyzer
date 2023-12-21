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
    return lengthMedium;
  },
  getNumberCount: (text) => {
    const matchLength = text.match(/[0-9]+/g);
      if (matchLength) {
        return matchLength.length; 
      }else {
        return 0;
      }
  },
  getNumberSum: (text) => {
    const matchLength = text.match(/[0-9]+/g);
    let counter = 0;
   if (matchLength) {
     for(let index =0; index < matchLength.length; index++){
      counter+= parseFloat(matchLength[index]);
      }
     return counter;
   }else {
    return 0;
   }
  },
};

export default analyzer;