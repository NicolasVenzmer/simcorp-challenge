/*
EXERCISE #3

Write a function that returns the longest non-repeating substring for a string input.

Expected Result
longestSubstring("abcabcbb") ➞ "abc"
longestSubstring("aaaaaa") ➞ "a"
longestSubstring("abcde") ➞ "abcde"
longestSubstring("abcda") ➞ "abcd


INFO
If multiple substrings tie in length, return the one which occurs first.
Bonus: Can you solve this problem in linear time?

*/

function longestSubstring(str) {
    let longest = "";
    let current = "";
    let charSet = new Set();
    let i = 0;
    let j = 0;

    while (j < str.length) {
        if (!charSet.has(str[j])) {
            charSet.add(str[j]);
            current += str[j];
            j++;
        } else {
            charSet.delete(str[i]);
            current = current.substring(1);
            i++;
        }

        if (current.length > longest.length) {
            longest = current;
        }
    }

    console.log(`The longest substring of ${str} is: ${longest}`);
}

longestSubstring("aaaaaa");
longestSubstring("abcde");
longestSubstring("abcda");
longestSubstring("abcda");