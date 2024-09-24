/*
* 189.轮转数组 
* 给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。
*  
* 示例 1:
* 输入: nums = [1,2,3,4,5,6,7], k = 3
* 输出: [5,6,7,1,2,3,4]
* 解释:
* 向右轮转 1 步: [7,1,2,3,4,5,6]
* 向右轮转 2 步: [6,7,1,2,3,4,5]
* 向右轮转 3 步: [5,6,7,1,2,3,4]
* 示例 2:
* 输入：nums = [-1,-100,3,99], k = 2
* 输出：[3,99,-1,-100]
* 解释: 
* 向右轮转 1 步: [99,-1,-100,3]
* 向右轮转 2 步: [3,99,-1,-100]
*  
* 提示：
* 	1 <= nums.length <= 105
* 	-231 <= nums[i] <= 231 - 1
* 	0 <= k <= 105
*  
* 进阶：
* 	尽可能想出更多的解决方案，至少有 三种 不同的方法可以解决这个问题。
* 	你可以使用空间复杂度为 O(1) 的 原地 算法解决这个问题吗？
* 
*/


// @QUESTION_START
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {

};
// @QUESTION_END


/*
* Test Cases
*/
showLogs(
  rotate,
  {
    data: [[  [1,2,3,4,5,6,7],  3],[ [-1,-100,3,99],  2]],
    structure: ["number[]","number"]
  },
  {
    data: [ [5,6,7,1,2,3,4],[3,99,-1,-100]],
    structure: ["void"]
  }
)

console.log('点击跳转到题目提交: https://leetcode.cn/problems/rotate-array/');
