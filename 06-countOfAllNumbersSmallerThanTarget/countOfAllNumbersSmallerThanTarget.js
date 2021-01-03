function countOfAllNumbersSmallerThanTarget(nums, target) {
  // Insert code here;
  return nums.filter(items => items < target).length;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;