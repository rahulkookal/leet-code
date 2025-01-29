function moveZeroes(nums) {
    let no = 0;
    let len = nums.length
    for(let i=0; i<len; i++){
        if(nums[i] != 0){
            nums[no] = nums[i]
            no++
        }
    }
    for(let k = no; k<len; k++){
        nums[k] = 0;
    }
};