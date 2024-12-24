const nums = [1,1,1,2,2,3,2,-1,5,5,3]
var topKFrequent = function(nums, k) {
    const map = new Map();
    for(let i=0; i<nums.length ; i++){
        if(map.has(nums[i])){
            map.set(nums[i] , map.get(nums[i]) +1)
        }
        else
            map.set(nums[i], 1)
    }
    const ab =[];
    const arr = Array.from(map);
    console.log(arr)
    return arr.sort((a,b)=>b[1]-a[1]).slice(0,k).map(a=>a[0])
};

console.log(topKFrequent(nums, 2))