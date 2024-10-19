/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let result = [];
    backtrack([], k, n, result, 1)
    return result;
    
    function backtrack(p_r, k, n, result, start) {

        if(p_r.length == k && n == 0){
            result.push([...p_r])
            return
        }
    
        if(p_r.length ==k || n<0){
            return
        }
    
        for(let i = start; i<=9; i++) {
            p_r.push(i);
            backtrack(p_r, k, n - i, result, i+1)
            p_r.pop()
        }
    }
    
};

combinationSum3(3, 9)