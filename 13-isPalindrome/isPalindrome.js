function isPalindrome(word) {
  // Insert code here;

  var re = /[^A-Za-z0-9]/g; 
 word = word.toLowerCase().replace(re, '');


 var len = word.length; 
 
 for (var i = 0; i < len/2; i++) {
   if (word[i] !== word[len - 1 - i]) { return false; }
   return true;
}
}
// Do not edit this line;
module.exports = isPalindrome;