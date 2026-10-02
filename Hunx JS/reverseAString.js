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


//TODO: reverse an integer as well Ex.1234 -> 4321


//  integer reversal

const reverseInt = (num)=>{
  let reversed = ""
  num = num.toString();
  for(let i=num.length -1;i>=0;i--){
    reversed += num[i]
  }
  return 'reversed number of ' + num + ' :' + "" + parseInt(reversed)
}

let res1 = reverseInt(100991)

let res2 = reverseInt(1234)

let edgeCase = reverseInt(0012)
console.log(res1)
console.log(res2)
console.log(edgeCase)
