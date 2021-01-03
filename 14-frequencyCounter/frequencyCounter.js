function frequencyCounter(word) {
  // Insert code here;
  var result={};
  for(let i = 0; i <word.length; i++){
    if(result[word[i]] ){
      result [word[i]]++;
    }else{
      result[word[i]]=1;
    }
  }
return result;
}

// Do not edit this line;
module.exports = frequencyCounter;