const singleNumber = (nums) => { //[2,2,1]
    nums = nums.sort((a,b)=>a-b);
    for(let i=1; i<nums.length; i+=2){
        if(nums[i]!==nums[i-1]){
            if(nums[i]===nums[i+1]){
                return nums[i-1];
            }else return nums[i];
        }
    }
    return nums[nums.length-1]; //1
};