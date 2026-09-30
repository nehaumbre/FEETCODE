// function reverseAString(string){
//   const stringArray = string.split('')
//   const reversedArray = []
//
//
//   for(let i=stringArray.length-1;i>=0;i--){
//     reversedArray.push(stringArray[i])
//   }
//   return reversedArray.join("")
// }
//
// let result = reverseAString('Hello')
// console.log(result)


const reverseAString = (string)=>{
  let reversedString = ""

  for(let i= string.length-1; i>=0; i--){
    reversedString += string[i]
  }

  return reversedString
}
console.log(reverseAString("Very Good"))


// ""
//  ↓
// "o"
//  ↓
// "ol"
//  ↓
// "oll"
//  ↓
// "olle"
//  ↓
// "olleH"
// "take what I already have and add this to it."
