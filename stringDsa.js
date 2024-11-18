//1 Reverse a String.
function reverseString(str){
    return str.split("").reverse().join("")
}
console.log(reverseString("hellow"))

// using the for loop
function reverseStringFor(str){
   let reverseStr=""
   for(let i=str.length-1; i>=0; i--){
       reverseStr += str[i]
   }
   return reverseStr
}
console.log(reverseStringFor("hellow"))


//2 Check for Palindrome
// Problem: Determine if a string reads the same forward and backward.
function checkPalidrom(str){
   return  str === str.split('').reverse().join("")
}
console.log(checkPalidrom("madam"))

// without inbuilt method
function checkPalidromFor(str){
    let reverse=""
    for(let i=str.length-1;i>=0;i--){
        reverse += str[i]
    }
    return reverse === str
}
console.log(checkPalidromFor("madam"))

//3 Count Vowels and Consonants  aeiou
// Example: Input: "hello", Output: Vowels: 2, Consonants: 3
function countVowels(str) {
   const vowels = 'aeiouAEIOU';
   let count = 0;
   for (let char of str) {
       if (vowels.includes(char)) {
           count++;
       }
   }
   return count; 
}
console.log(countVowels("Hello World kjk")); // Output: 3


//4 Remove Duplicates
// Example: Input: "banana", Output: "ban"
function revmoveDuplicate(str){
   let updatedStr='';
   for(let i=0;i<str.length;i++){
       if(!updatedStr.includes(str[i])){
           updatedStr += str[i]
       }
   }
   return updatedStr
}
console.log(revmoveDuplicate("banana")); // Output: ban


//5 Count Occurrences of Each Character 
function frequencyStr(str){
   let obj={}
   for(let i=0;i<str.length;i++){
       obj[str[i]]= ( obj[str[i]] || 0) + 1
   }
   return obj
}
console.log(frequencyStr("swiss")); // Output: { s: 3, w: 1, i: 1 }


//6 Find the  Non-Repeating Character
function findNonRepeating(str){
   let obj={}
   let updated="";
   for(let val of str){
       obj[val]=(obj[val] || 0)+1
   }
   for(let char in obj){
       if(obj[char]===1){
           updated += char
           // return char      First Non-Repeating Character
       }
   }
   return updated
}
console.log(findNonRepeating("swiss")); // wi

// 7 Check if Two Strings are Anagrams
// etermine if two strings contain the same characters in a different order.
function checkAnagrams(str1,str2){
   if(str1.length !== str2.length) return false
   let obj1={}
   let obj2={}
   for(let val of str1){
       obj1[val]= (obj1[val]||0) +1
   }
   for(let val of str2){
       obj2[val]= (obj2[val]||0) +1
   }
   for (let char in obj1){
       if(obj1[char]!==obj2[char]){
         return false
       }
   }
   return true
}
console.log(checkAnagrams("listen","silent"));   //true


//8 Convert String to Uppercase/Lowercase
function convertUppercase(str){
    return str.toUpperCase()
}
console.log(convertUppercase("swiss"));           //SWISS
   
//9 replace Spaces with a Character
// Example: Input: "hello world", replace with "-", Output: "hello-world"
function replaceSpace(str){
   return  str.replace(" ","-")
}
console.log(replaceSpace("hello world"));        //: "hello-world"


// 10 Check if a String Contains Only Digits
function checkStr(str){
   // let updated = Number(str)
   return !isNaN(str)
}
console.log(checkStr(" 12345"));        //:true


//11 Remove a Given Character
function removeChar(str,val){
  let updateStr=""
   for(let char of str){
       if(char !== val){
           updateStr +=char
       }
   }
   return updateStr
}
console.log(removeChar("hello","l"));          //:heo

//uisng inbuilt method
function removeCharBuilt(str,val){
   return str.replaceAll("l","")
}
console.log(removeCharBuilt("hello","l"));        //:heo

// 12 Count Words in a Sentence
function countWord(str){
   let count = 1;
    str = str.trim()
    for (let val of str){
       if(val === " "){
           count+=1
       }
    }
    return count
}
console.log(countWord("I love coding by adam shaikh"));        //:6

//use regEx
function countWordReg(str){
      str=str.trim()
     return str.split(" ").length       //    return str.match(/ /g).length+1
}
console.log(countWordReg(" I love coding by adam shaikh"));        //:6


//13 Find the Longest Word in a Sentence
function longestWord(str){
   return str.split(" ").reduce((acc,curr)=>{
       return  acc.length > curr.length ? acc : curr
   },"")
}
console.log(longestWord("I love programming js dsa"));        //:programming


//14 Check if a String is a Substring of Another  Check if one string is a substring of another.
function checkSubstr(str1,str2){
   if(str1.includes(str2) || str2.includes(str1)) return true
   return false
}
console.log(checkSubstr("coding", "I love coding"));        //:true


//15 Rotate a String
// Problem: Rotate a string to the right or left by a given number of positions.
function rotateStr(str,k){
   k =str.length-k
    return  str.slice(k)+str.slice(0,k);
}
console.log(rotateStr("abcdef",2));        //:efabcd


