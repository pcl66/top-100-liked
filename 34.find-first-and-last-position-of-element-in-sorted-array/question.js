/*
* 34.在排序数组中查找元素的第一个和最后一个位置 
* 给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。
* 如果数组中不存在目标值 target，返回 [-1, -1]。
* 你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。
*  
* 示例 1：
* 输入：nums = [5,7,7,8,8,10], target = 8
* 输出：[3,4]
* 示例 2：
* 输入：nums = [5,7,7,8,8,10], target = 6
* 输出：[-1,-1]
* 示例 3：
* 输入：nums = [], target = 0
* 输出：[-1,-1]
*  
* 提示：
* 	0 <= nums.length <= 105
* 	-109 <= nums[i] <= 109
* 	nums 是一个非递减数组
* 	-109 <= target <= 109
* 
*/


// @QUESTION_START
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {

};
// @QUESTION_END


/*
* Test Cases
*/
showLogs(
  searchRange,
  {
    data: [[ [5,7,7,8,8,10],  8],[ [5,7,7,8,8,10],  6],[ [],  0]],
    structure: ["number[]","number"]
  },
  {
    data: [[3,4],[-1,-1],[-1,-1]],
    structure: ["number[]"]
  }
)

console.log('点击跳转到题目提交: https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/');
