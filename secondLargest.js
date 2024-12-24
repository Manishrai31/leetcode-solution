const arr =[2,4,56,79,24,66,78,54,33,100];

const findSecondLargest = (arr)=>{
    let firstLargestElement= 0;
    let secondLargestElement = 0;
    let index = -1;
    for(let i=0 ; i<= arr.length-1 ; i++){
        if(arr[i] > firstLargestElement){
            secondLargestElement = firstLargestElement;
            firstLargestElement = arr[i];
                 
        }
        else{
            if(arr[i]>secondLargestElement){
                secondLargestElement = arr[i]
            }
        }
    }
    return {secondLargestElement ,index,firstLargestElement}
}

console.log(findSecondLargest(arr))