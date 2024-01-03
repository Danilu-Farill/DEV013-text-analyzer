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
  getAverageWordLength: (text) => {  //AQUI TENGO ERROR  //Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. //en esta frase debe dar 5.53 y da 5.526315
    //const character = text.match(/[A-Za-z0-9.,]+/g).join("").length;
    const character = text.split(" ").join("").length;
    const word = text.split(" ").length;
    const lengthMedium = character/word;
    const lengthMediumFixed = lengthMedium.toFixed(2);
    /*console.log("cha", typeof Number(lengthMediumFixed));
    //const lengthMediumFixed = parseFloat(lengthMedium);//CON TOFIXED ME DA LA CANTIDAD PERO NO LA QUIEREN ASÍ
    const character = text.split(" ").join("").length;
    const word = text.split(" ").length;
    const lengthMedium = character/word;
    const lengthMediumFixed = parseFloat(lengthMedium).toFixed(2);//CON TOFIXED ME DA LA CANTIDAD PERO NO LA QUIEREN ASÍ
    console.log("le", lengthMediumFixed);*/
    return Number(lengthMediumFixed);
  },
  getNumberCount: (text) => {
    /*//const matchLength = text.match(/[0-9\.]+/g);
    const matchLength = text.match(/d+\.\d+/|/d+/g);
    console.log(matchLength);
    if (matchLength) {
      return parseFloat(matchLength.length); 
    } else {
      return 0;
    }*/
    
    //const regex = /\d+\.\d+/g;
    //const regex2 = text.match(/\./g);
    //const matchLength = text.match(regex);
    const word = text.split(" ");//todos con su espacio
    /*const matchTextSplit = text.split(/[a-zA-Z]+/g); //números sin espacios
    console.log("split", matchTextSplit);
    console.log(word);
    let filterNumber = word.filter(number => Number.parseFloat(number));
    console.log("filter", filterNumber.length);
    return filterNumber.length;*/
    //let counter = [];
    /*if (isNaN(word)) {
      return 0;
    } if(word == matchTextSplit) {
      for (let index = 0; index < word.length; index++) {
        const element = word[index];
        console.log("ele", element);
        return element;
      }
    }*/


    let suma = 0;
    for (let index = 0; index < word.length; index++) { 
      const element = word[index].replace(/\.$/, ""); 
      if (!isNaN(element) && element !== ""){
        suma++;
      }
    }
    return suma;

    /*
    let suma = 0;
    for (let index = 0; index < word.length; index++) { 
      const element = word[index]; 
      console.log("ele", element);

      if (element !== "" && !isNaN(parseFloat((element)))) {
        suma++;
        console.log("suma", parseFloat(suma));
      }
    }
    return suma;
*/
    /*
    let suma = 0;
    for (let index = 0; index < word.length; index++) { 
      const element = word[index]; 
      if (element !== "" && !isNaN((element))) {
        suma++;
      }
    }
    return Number(suma);
    */
    

    /*
    const word = text.split(" ");
    //const word = text.split(" ").length;
    console.log(word);
    const matchLength = text.match(/[0-9.]+/g);
    //const matchLength = text.match(/\d/);
    console.log(matchLength, "match");
    let counter = 0;
    if (word >= '0' && word <= "9") {
      for (let index = 0; index < matchLength.length; index++) {
        const element = matchLength[index];
        counter += parseFloat(matchLength[index]);
        console.log(element);
        console.log("counter", parseFloat(counter).length);
        return element.length;
      }} else {
        return 0;
      }

    //const matchText = text.match(/[a-zA-Z]+/g);
    /*if (matchLength) {
      return parseFloat(matchLength.length); 
    } else{
      return 0;
    }*/
  },
  getNumberSum: (text) => {
    /*const splitText = text.split(" ");
    let counter = 0;
      for(let index=0; index < splitText.length; index++){
        const element = parseFloat(splitText[index]);
        console.log(element);
    if(!isNaN(element)) {
      counter += element;
    }
    return counter;
  }*/

    const splitNumber = text.split(" ");
    let counter = 0;
    for(let index=0; index < splitNumber.length; index++){
      const element = splitNumber[index].replace(/\.$/, "");
      if(!isNaN(element) && element !== ""){
        counter += parseFloat(element);
      }
    }
    return counter;




    /*const matchLength = text.match(/[0-9.]+/g);
    let counter = 0;
    if (matchLength) {
      for(let index=0; index < matchLength.length; index++){
        counter+= parseFloat((matchLength[index]));
      }
    }if(!matchLength) {
      return 0;
    }
    return counter;*/

    /*
    const splitNumber = text.split(" . ");
    const inclu = splitNumber.includes(/[0.9]/);
    let counter = 0;
    if (typeof splitNumber === isNaN) {
      return 0;
        
      }else {
        for (let index = 0; index < splitNumber.length; index++) {  
          counter += parseFloat(splitNumber[index]);
          console.log(counter);
          console.log(inclu);

        }
      }
      
    return counter;*/
  },
};

export default analyzer;