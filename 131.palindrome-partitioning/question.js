/*
* 131.分割回文串 
* 给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。
*  
* 示例 1：
* 输入：s = "aab"
* 输出：[["a","a","b"],["aa","b"]]
* 示例 2：
* 输入：s = "a"
* 输出：[["a"]]
*  
* 提示：
* 	1 <= s.length <= 16
* 	s 仅由小写英文字母组成
* 
*/


// @QUESTION_START
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {

};
// @QUESTION_END


/*
* Test Cases
*/
showLogs(
  partition,
  {
    data: [[ "aab"],[ "a"]],
    structure: ["string"]
  },
  {
    data: [[["a","a","b"],["aa","b"]],[["a"]]],
    structure: ["string[][]"]
  }
)

console.log('点击跳转到题目提交: https://leetcode.cn/problems/palindrome-partitioning/');
