const array =[1,3,2,4,5,7,4,3];
//1,3,2,4,32,2
let isFound = false;
for(let i=array.length-1 ;i>=0 ; i--){
    if(array[i] - array[i-1] >=0){
        let temp=0;
        temp =array[i-1];
        array[i-1] = array[i];
        array[i]= temp;
        isFound=true;
        break;
    }
}

if(isFound)
{
    console.log(array.join(""))
    return array;
}
else{
    console.log(array)
    return array.reverse()
}