var twoSum = function(nums, target) {
    let map = new Map();
    for(let i = 0; i < nums.length; i++) {
        let item = nums[i]
        let index = map.get(target - item);
        if(index !== undefined) return [i, index];
        map.set(item, i);
    }
};

console.log(twoSum([3,4,5,2,7,8,9], 14));