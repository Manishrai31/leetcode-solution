// by creating the new array
const arr= [1,2,3,4,4,4,4,4,4,5,5,6,7,7,8];
const newArr=[];
let low=0;
let next = arr.length-1
let ab=0
while(low <= next){
    if(arr[low]!=arr[low+1])
    {
        newArr.push(arr[low]);
    }
    low++;
}
console.log(newArr)

