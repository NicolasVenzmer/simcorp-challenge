/*
EXERCISE #2

Given a string of letters, create a function that returns an array with the separator that yields the longest possible substring, provided that:

The substring starts and ends with the separator.
The separator doesn't occur inside the substring other than at the ends.
If two or more separators yield substrings with the same length, they should appear in alphabetical order.
Examples
separator("supercalifragilistic") ➞ ["s"]
// The longest substring is "supercalifragilis".

separator("laboratory") ➞ ["a", "o", "r"]
// "abora", "orato" and "rator" are the same length.

separator("candle") ➞ []
// No possible substrings.

INFO
All substrings should be at least of length 2 (i.e. no single-letter substrings).
Expect lowercase alphabetic characters only.

*/

function recordPositions(str) {
    const positions = {};
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (!positions[char]) {
            positions[char] = [i, i];
        } else {
            positions[char][1] = i;
        }
    }
    return positions;
}

function findLongestSeparators(positions) {
    const separators = [];
    let maxLength = 0;
    for (const char in positions) {
        const [first, last] = positions[char];
        if (last - first + 1 >= 2) {
            const length = last - first + 1;
            if (length > maxLength) {
                maxLength = length;
                separators.length = 0;
                separators.push(char);
            } else if (length === maxLength) {
                separators.push(char);
            }
        }
    }
    separators.sort();
    return separators;
}

function separator(str) {
    const positions = recordPositions(str);
    const separators = findLongestSeparators(positions);
    console.log(`The string ${str} separators are [${separators}].`);
}

separator('happyanniversaryqontigo')
separator('futureofwork')
separator('Intranet')
