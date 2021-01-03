function productOfAnyAmountOfNumbers(...args) {
  // Insert code here;

  var total   =   1;
  
  for(var i of args){
         
           total   *=  i;
       }
     return total;
}





// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;