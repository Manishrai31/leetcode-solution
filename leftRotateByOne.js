const arr = [1,2,3,4,5,6];
let rotation = 2;
var rotateByOne = (arr)=>{
    let first = arr[0];
    for(let i=1 ; i<=arr.length-1 ; i++){
        arr[i-1]= arr[i]
    }
    arr[arr.length-1]= first;    
    // return arr
}

for(let i=0 ; i<rotation ; i++){
    rotateByOne(arr);
}
console.log(arr)
// console.log(rotateByOne(arr));