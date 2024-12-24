// if a element is greater than all the elements present in the right side of it then the element is leader in array
// Suppose arr = [1,2,3,4,22,11,3,5]
// 5 is leader
// 11 is leader
// 22 is leader

const arr = [1,2,3,4,22,11,3,6,5,6,1];
const newArr =[];

var leaderInArray = (arr)=>{
    let largest = 0
    for(let i = arr.length-1 ; i>=0; i--){
        if(arr[i]>largest){
            newArr.unshift(arr[i]);
            largest = arr[i]
        }
    } 
}
leaderInArray(arr);
console.log(newArr)