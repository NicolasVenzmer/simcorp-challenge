/*
Exercise #4

Given a string containing just the characters ( and ), find the length of the longest valid (well-formed) parentheses substring.

Expected Result
sizeParentheses("(()") ➞ 2
// Longest valid parentheses substring is "()"

sizeParentheses(")()())") ➞ 4
// Longest valid parentheses substring is "()()"

sizeParentheses("()))))(()())(") ➞ 6

*/

function sizeParentheses(str){
    let stack = [];
    let max = 0;
    stack.push(-1);
    for(let i = 0; i < str.length; i++){
        if(str[i] === '('){
            stack.push(i);
        }else{
            stack.pop();
            if(stack.length === 0){
                stack.push(i);
            }else{
                max = Math.max(max, i - stack[stack.length - 1]);
            }
        }
    }
    console.log(`The largest valid parentheses substring for "${str}" is: ${max}`);
}

sizeParentheses("(()");
sizeParentheses(")()())");
sizeParentheses("()))))(()())(");