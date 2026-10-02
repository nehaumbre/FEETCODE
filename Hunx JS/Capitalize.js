const capitalizeAWord = (str)=>{
  return str[0].toUpperCase() + str.slice(1)
}

let result = capitalizeAWord('Hello')

console.log(result)





const capitalizeASentence = (str) => {
  let words = str.split(" ")
  for(let i=0;i<words.length;i++){
    words[i] = words[i][0].toUpperCase() + words[i].slice(1)
  }
  return words.join(" ")
}

console.log(capitalizeASentence("hello world from javascript"))



//using map


const cap = (str)=>{
  return str.toLowerCase().split(" ").map((word)=>word[0].toUpperCase() + word.slice(1)).join(" ")
}
console.log(cap('did you'))

