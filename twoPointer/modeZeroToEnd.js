// By creating two new array
const arr = [1,3,0,6,8,0,3,44,0];
const newArr =[];
const zeroArr =[];
for(let i=0 ; i< arr.length ; i++){
    if(arr[i]!== 0){
        newArr.push(arr[i]);
    }
    else
    zeroArr.push(0)
}
// console.log([...newArr,...zeroArr])
//Without creating new array;
const arr2 = [1,3,0,6,8,0,3,44];
let count = 0
for(let i=0; i<arr.length ; i++){
    if(arr[i]!=0){
        let temp = arr[i]
        arr[i] = arr[count];
        arr[count]= temp        
        count++
    }
}
console.log(arr);