function countOfAllBooleans(arr) {
  // Insert code here;
  var i=0;
  for (objects in arr) {
    if (arr[objects] === true || arr[objects]===false) {
       i++;
    }
}
return i;
}

// Do not edit this line;
module.exports = countOfAllBooleans;