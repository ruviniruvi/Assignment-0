function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  var newSet =new Set();
  for(var i of args )
  {  
    for(var j of i )
    {
      if(newSet!=args[j]) 
      newSet.add(j);
    }
   
  }
  return newSet;



}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;