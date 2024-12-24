// In this program we have to segregate the number in such a way that all even number are positioning at left side of the array
const arr = [3,2,3,4,6,5,6,8,533,4,55,4,444,34,54,34,51];
let count = 0
for(let i=0; i<arr.length ; i++){
    if(arr[i]%2==0){
        let temp = arr[count];
        arr[count]= arr[i];
        arr[i]= temp;
        count++
    }
}
console.log(arr);