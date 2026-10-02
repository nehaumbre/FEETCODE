const Palindrome = (str)=> {
  let reversedStr = str.split("").reverse().join("")
   if(reversedStr === str){
     console.log('string is a palindrome')
   }else{
   console.log(`string is not a palindrome`)
}}

Palindrome('madam')

//TODO: Solve Palindrome with two pointer approach

//madam
const twoPointerPalindrome = (str)=>{
  let pt1 = 0
  let pt2 = str.length-1

  while(pt1 < pt2){
    if(str[pt1] !== str[pt2]){
      return false
    }
    pt1++
    pt2--
  }
  return true
}


twoPointerPalindrome('madam')
//Two pointers = use two indexes to traverse a
// data structure intelligently instead of using
// nested loops.
