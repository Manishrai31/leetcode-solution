const strs = ["eat","tea","tan","ate","nat","bat"];
var groupAnagrams = function(strs) {
    if(strs.length == 0)
        return [[""]]
    if(strs.length ==1)
        return [strs]
    const newArray = strs.map((item)=>item.split("").sort().join(""));
    
    const map = new Map();
    for(let i=0; i<strs.length; i++){
        if(map.get(newArray[i]) !== undefined )
            map.set(newArray[i], [...map.get(newArray[i]), strs[i]]);
        else
            map.set(newArray[i], [strs[i]])
    }
    const finalArray=[...map.values()].map((item)=>{
        return item
    })
    return finalArray
};

console.log(groupAnagrams(strs))
