/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let words = s.trim().split(" ");
    let result = "";
    for(let i = 1; i<= words.length; i++){
        if(words[words.length-i]){
            result += " " +words[words.length-i].trim()
        }
    }
    return result.trim();
};