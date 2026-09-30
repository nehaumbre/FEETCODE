/**
 * PROBLEM: Pair Sum (Two Pointers)
 *
 * Given a SORTED array of integers 'nums' and an integer 'target',
 * find the indices of the two numbers such that they add up to the 'target'.
 *
 * Constraints:
 * 1. The array is already sorted.
 * 2. There is exactly one solution.
 * 3. You may not use the same element twice.
 *
 * Goal:
 * - Time Complexity: O(n)
 * - Space Complexity: O(1)

 * Example:
 * Input: nums = [2, 7, 11, 15], target = 9
 * Output: [0, 1]
 *
 * Input: nums = [1, 2, 3, 4, 6], target = 6
 * Output: [1, 3]
 */

function twoSumSorted(nums, target) {
    /**
     * JUDGMENT - Attempt 1:
     * Approach: Brute Force (Nested Loops)
     * Result: Correct Output ✅
     * Time Complexity: O(n^2) - Slow for large datasets ❌
     * Space Complexity: O(1) ✅
     * Note: Did not utilize the "Sorted" property of the array.
     */
    // TODO: Implement the Two Pointers logic here
    let result= []
    for(let i=0;i<=nums.length;i++){
       for(let j=i+1;j<nums.length;j++){
          if(nums[i] + nums[j] === target){
            result.push(i,j);
            console.log(result)
          }
       }
    }
    return result
}


// --- Test your code here ---
const test1 = twoSumSorted([2, 7, 11, 15], 9);
console.log("Test 1 (Expected [0, 1]):", test1);

const test2 = twoSumSorted([1, 2, 3, 4, 6], 6);
console.log("Test 2 (Expected [1, 3]):", test2);

