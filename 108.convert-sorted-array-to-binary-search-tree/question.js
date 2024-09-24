/*
* 108.将有序数组转换为二叉搜索树 
* 给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵 平衡 二叉搜索树。
*  
* 示例 1：
* 输入：nums = [-10,-3,0,5,9]
* 输出：[0,-3,9,-10,null,5]
* 解释：[0,-10,5,null,-3,null,9] 也将被视为正确答案：
* 示例 2：
* 输入：nums = [1,3]
* 输出：[3,1]
* 解释：[1,null,3] 和 [3,1] 都是高度平衡二叉搜索树。
*  
* 提示：
* 	1 <= nums.length <= 104
* 	-104 <= nums[i] <= 104
* 	nums 按 严格递增 顺序排列
* 
*/


// @QUESTION_START
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {

};
// @QUESTION_END


/*
* Test Cases
*/
showLogs(
  sortedArrayToBST,
  {
    data: [[ [-10,-3,0,5,9]],[ [1,3]]],
    structure: ["number[]"]
  },
  {
    data: [[0,-3,9,-10,null,5],[3,1]],
    structure: ["TreeNode"]
  }
)

console.log('点击跳转到题目提交: https://leetcode.cn/problems/convert-sorted-array-to-binary-search-tree/');
