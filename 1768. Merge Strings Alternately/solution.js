/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let result = '';
    let i=0;
    while(i < word1.length && i <word2.length){
        result += word1[i]
        result += word2[i]
        i++
    }
    if(word1.length <word2.length){
        result += word2.slice(i, word2.length)
    }
    if(word2.length <word1.length){
        result += word1.slice(i, word1.length)
    }
    return result;
};