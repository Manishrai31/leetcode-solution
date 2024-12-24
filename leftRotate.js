const arr =[1,2,3,4,5,6,7,8,9]
let d=1;
var reverse = (arr ,s, l)=>{
    while(s<l){
        let temp = arr[s];
        arr[s]= arr[l];
        arr[l]=temp;
        s++;
        l--;
    }
    // return arr;
}
// console.log(reverse(arr , 0, d-1));

var rotateByNum = (arr , d)=>{
    reverse(arr , 0, d-1);
    reverse(arr, d, arr.length-1);
    reverse(arr , 0 , arr.length-1);
    return arr
}
console.log(rotateByNum(arr , d))
// console.log(arr , d))