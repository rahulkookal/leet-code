/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    s = s.split("");
    let vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
    let left = 0, right = s.length -1;
    while(left < right){
        if(!vowels.includes(s[left])){
            left++
        } else if(!vowels.includes(s[right])){
            right --
        } else {
            let i = s[left];
            s[left] = s[right]
            s[right] = i;
            left++;
            right--;
        }

    }
    return s.join('');
};