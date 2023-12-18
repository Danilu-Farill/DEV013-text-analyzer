const analyzer = {  
  getWordCount: (text) => {
    let word = text.split(" ").length;
    return  word;
  },
  getCharacterCount: (text) => {
    let character = text.length;//cuenta los caracteres con espacio
    return character;
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro 
    /*let noSpace = letras;
    console.log(noSpace.replace(/\s+/g, '').length);//sin espacio
    console.log(noSpace.split(" ").join("").length);//sin espacio*/
    //Falta excluir signos
    let noSpace = text.split(" ").join("").length;
    return noSpace;
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    /*let longitud = character/word;
    console.log(longitud);/*///RECTIFICAR
    let lengthMedium =  text.split(" ").join("").length/text.split(" ").length;
    return lengthMedium;
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    let matchNumber = /(\d+)/g;
    console.log(matchNumber);
    return text.match(matchNumber).length;
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    console.log(text);
    let counter = 0;
    //for (let index = 0; index < text.length; index++) {
      //if()
   // }
  },
};

export default analyzer;