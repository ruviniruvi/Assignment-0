class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    // Insert code here;
    //let start = 0;
   // let end = nums.length - 1;

    if(!nums.length)
    {
      return false;
    }
    else{
        let middle = Math.floor(nums.length / 2);

        if (nums[middle] === target) {
            // found the target
            return true;
        } 
        else {
          if (nums[middle] < target)
           {
            // continue searching to the right
            return this.binarySearch(nums.slice(middle + 1),target);
        } 
        else if(nums[middle]>target){
            // search searching to the left
            return this.binarySearch(nums.slice(0, middle ),target);}
        }
    
      }

  
      }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;