function countOfAllIndexMatchingNumbers(nums) {
  // Insert code here;
  return nums.filter(items => items === nums  ).length;
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;