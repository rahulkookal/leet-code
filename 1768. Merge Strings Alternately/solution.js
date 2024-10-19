/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let i=0;
    let result = "";
    while(word1.charAt(i) || word2.charAt(i)){
        result += word1.charAt(i)?word1.charAt(i):'';
        result += word2.charAt(i) ? word2.charAt(i):'';
        i++
    }
    return result;
};