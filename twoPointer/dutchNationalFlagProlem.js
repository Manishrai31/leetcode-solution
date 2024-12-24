const arr = [1,2,0,1,2,2,2,0,0,1,1,2,2,0,0,0];
let zeroCount = 0;
let oneCount = 0;
for(let i = 0 ; i<arr.length ; i++){
    if(arr[i]==0){
        let temp = arr[i];
        arr[i]= arr[zeroCount];
        arr[zeroCount]= temp;
        zeroCount++;
        oneCount++
    }
        if(arr[i]==1){
            let temp = arr[i];
            arr[i]= arr[oneCount];
            arr[oneCount]= temp;
            oneCount++
        }
}
console.log(arr);