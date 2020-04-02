var twoSum = function(nums, target) {
  const known = {};
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (diff in known) {
      return [i, nums.indexOf(diff)];
    } else {
      known[nums[i]] = i;
    }
  }
};

let n = [2, 7, 11, 15];
let t = 9;

console.log(twoSum(n, t));
