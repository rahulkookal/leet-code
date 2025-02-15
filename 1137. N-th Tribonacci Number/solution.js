*/
var tribonacci = function(n) {
    if(n==0) return 0
    if(n==1 || n==2) return 1
    t = [0,1,1]
    for(let i=3; i<=n; i++){
        let sum = t[0] + t[1] + t[2];
        t.shift()
        t.push(sum)
    }
    return t[2];
}