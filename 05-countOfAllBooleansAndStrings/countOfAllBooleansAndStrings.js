function countOfAllBooleansAndStrings(arr) {
  // Insert code here;
  var i=0;
  for (objects in arr) {
    if (typeof arr[objects] === "boolean" || typeof arr[objects]==="string") {
       i++;
    }
}
return i;
  
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;