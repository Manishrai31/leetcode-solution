var twoSum  = (arr , target)=>{
    var map = new Map();
    for(let i=0 ; i<arr.length ; i++){
        let item = arr[i];
        let index= map.get(target - item);
        if(index!==undefined) return [index , i];
        map.set(item , i);
    }
}
console.log(twoSum([3,4,5,2,7,8,9], 14));