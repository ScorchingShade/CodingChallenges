/***
 * 
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].

 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    return returnedIndexes(nums, target);
};


let returnedIndexes = (nums, target) => {
    let sum = 0;
    let arr = [];

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (j == i) continue;
            else {
                sum = nums[i] + nums[j];
                if (sum == target) {
                    arr.push(i);
                    arr.push(j);
                    return arr;
                }
            }
        }

    }


    return arr;
}



console.log(twoSum([2, 7, 11, 15], 9));