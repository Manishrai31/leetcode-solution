var haystack = "a";
var needle = "a"
var strStr = function(haystack, needle) {
    
    for(let i=0 ; i<haystack.length ; i++){
        let word = ""
        for(let j=i ; j<needle.length + i; j++){
            word= word+haystack[j]
            console.log("---")
        }
        if(word == needle)
            return i
    }
    return -1
};
console.log(strStr(haystack , needle))