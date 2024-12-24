var ab = 234321
var addDigits = function(num) {
    let sum =0 ;
    while(num >0){
        sum= sum + (num%10);
        console.log( "num", num,"sum", sum )
        num = parseInt(num / 10)
    }
    return sum;
};

console.log(addDigits(ab))