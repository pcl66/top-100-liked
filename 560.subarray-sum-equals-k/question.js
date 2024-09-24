/*
* 560.和为 K 的子数组 
* 给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的子数组的个数 。
* 子数组是数组中元素的连续非空序列。
*  
* 示例 1：
* 输入：nums = [1,1,1], k = 2
* 输出：2
* 示例 2：
* 输入：nums = [1,2,3], k = 3
* 输出：2
*  
* 提示：
* 	1 <= nums.length <= 2 * 104
* 	-1000 <= nums[i] <= 1000
* 	-107 <= k <= 107
* 
*/


// @QUESTION_START
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {

};
// @QUESTION_END


/*
* Test Cases
*/
showLogs(
  subarraySum,
  {
    data: [[ [1,1,1],  2],[ [1,2,3],  3]],
    structure: ["number[]","number"]
  },
  {
    data: [2,2],
    structure: ["number"]
  }
)

console.log('点击跳转到题目提交: https://leetcode.cn/problems/subarray-sum-equals-k/');
