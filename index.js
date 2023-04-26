function duplicateEncode(word){
    //making our WORD lower case 
    var word=word.toLowerCase();
    //making an auxiliary array
    var arrayWord=word.split("");
    //creating a string variable representing our output
    var result ="";
    //iterating every char of WORD
    for(var index=0; index<word.length;index++)
    {
      //specifying actuall char of WORD
        actualChar=word.charAt(index);
      //checking is actuall char is unique in array 'arrayWord' by checking first and last index of actuall char in array 'arrayWord'
        if(arrayWord.indexOf(actualChar)==arrayWord.lastIndexOf(actualChar))
        {   //if char is uniqe
            result = result + "(";
        }
        else
        {  //if char is not uniqe
           result=result+")";
        }
    }
    //returning output 'result'
    return result;
}