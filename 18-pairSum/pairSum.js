function pairSum(nums, target) {
  // Insert code here;

var newSet = [];
if (nums.length <= 1)
    {
      throw("The array length is not enough.");
    }

  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        newSet.push(i);
        return true;
       // newSet.push(j);
      }
    }
  }
  return false;




}

// Do not edit this line;
module.exports = pairSum;