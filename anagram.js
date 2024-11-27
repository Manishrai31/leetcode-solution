var isAnagram = function(s, t) {
    if(s.length!= t.length)
        return false
    for(let ltr in s.length > t.length ? s.length : t.length ){
       if(!t.includes(s.length > t.length ? s[ltr] : t[ltr]))
            return false
    }
    return true
};
console.log(isAnagram("cat" , "rat"))