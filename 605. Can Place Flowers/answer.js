/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let i = 0;
    while(i < flowerbed.length){
        if(flowerbed[i] ==0 &&!flowerbed[i-1] && !flowerbed[i+1]){
            flowerbed[i] = 1;
            n--
        }
        i++
        if(n<=0) return true
    }
    return false
};