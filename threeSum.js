const arr = [0,0,0,0,0,0,0,0,0,0];
let target = 0;
var checkAlreadyExist = (setOfIndex , arr)=>{
    let bool =true;
    let wor = arr.sort((a,b)=>a-b).join("");
    setOfIndex.forEach((item)=>{
        if(item.sort((a,b)=>a-b).join("")===wor)
            bool=false
    })
    return bool;
}
var threeSum = (arr , target)=>{
    const setOfIndex = []
    for(let i=0 ;i<arr.length ; i++){
        let newTarget = target - arr[i];
        const map = new Map();
        for(let j = 0 ;j<arr.length ; j++){
            if(i!=j){
                let item = arr[j];
                let index = map.get(newTarget - item);
                if(index != undefined){
                    if(checkAlreadyExist(setOfIndex , [i,j,index])){
                        setOfIndex.push([i,j,index]);
                    }
                } 
                map.set(item , j)
            }
        }
    }
    return setOfIndex;
}

console.log(threeSum(arr , target))
// console.log("ab"=="abc")