
sorth = (arr) => { 
	const sl = arr.filter((v) => v !== -1).sort((a,b) => a-b);
 
  return arr.map((v) => v === -1 ? v : sl.shift());
}
console.log(sorth([-1,150,190,170,-1,-1,160,180]));

/*
Given an array of strings, return another array containing all of its longest strings.
Example
For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
allLongestStrings(inputArray) = ["aba", "vcd", "aba"].
*/
const arr = ['abc', 'ab', 'agb', 'a'];
const a = Math.max(...arr.map(a => a.length));
console.log(arr.filter((v) => v.length==a))

/*
You are given a string s that consists of lower case English letters and brackets.

Reverse the strings in each pair of matching parentheses, starting from the innermost one.

Your result should not contain any brackets.

 

Example 1:

Input: s = "(abcd)"
Output: "dcba"
Example 2:

Input: s = "(u(love)i)"
Output: "iloveu"
Explanation: The substring "love" is reversed first, then the whole string is reversed.
Example 3:

Input: s = "(ed(et(oc))el)"
Output: "leetcode"
Explanation: First, we reverse the substring "oc", then "etco", and finally, the whole string.
*/
let s = 'a(bc)s(db)s'
while(s.includes('(')) {
	const start = s.indexOf('(');
  const end = s.indexOf(')');
  const reverse = s.slice(start+1, end).split('').reverse().join('');
  s = s.slice(0, start) + reverse + s.slice(end + 1);
}
console.log(s)
