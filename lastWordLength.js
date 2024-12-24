var s = "   hi anksjd    kjasn   kjabnsd   jhbhvbs adas dasd   ";
// console.log("-"+s.trim()+"-");

// var lengthOfLastWord = function (s) {
//   let arr = s.trim().split(" ");
//   return arr[arr.length - 1].length;
// };

// console.log(lengthOfLastWord(s));

//Without trim and split
var lengthOfLastWord2 = function (s) {
  let count = 0;
  let start= false
  for (let i = s.length-1; i >= 0; i--) {
    if (s[i] != " ") {
       count++;
       start=true
    }
    if(start && s[i] == " "){
        break
    }
  }
  return count
};

console.log(lengthOfLastWord2(s))
