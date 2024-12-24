var nums =[2,2,4,4,1,4,4,4,3,3,3,1,1,2,2,3,3,4,4]
var majorityElement = function(nums) {
    let num=nums[0];
    let count=1;
    for(let i=1 ; i<nums.length ; i++){
        if(num == nums[i]){
            count++
        }
        else{
            count--;
            if(count==0){
                num = nums[i]
                count++;
            }
        }
    }
    return num
};

console.log(majorityElement(nums))