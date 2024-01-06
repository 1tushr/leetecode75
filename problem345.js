// 345. Reverse Vowels of a String
// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

// Example 1:

// Input: s = "hello"
// Output: "holle"
// Example 2:

// Input: s = "leetcode"
// Output: "leotcede"
 

// Constraints:

// 1 <= s.length <= 3 * 105
// s consist of printable ASCII characters.



/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let str =s.split('');
    let vowels =[];
function isVowel(c) {
 return (c === 'a' || c === 'A' || c === 'e' || c === 'E' || c === 'i' || c === 'I' || c === 'o' || c === 'O' || c === 'u' || c === 'U');
}

for (let i=0;i<s.length;i++){
    if(isVowel(str[i])){
            vowels.push(str[i]);
    }
}
let j = 0;
for(let i=0;i<str.length;i++){
    if(isVowel(str[i])){
        str[i] = vowels[vowels.length-1-j]
        j++;
    }
}

return str.join("");
 
    }
