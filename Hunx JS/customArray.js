class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(item) {
    this.data[this.length]= item
    this.length++
    return this.length
  }

  pop() {
    if(this.length === 0){
      return undefined
    }
    const lastItem = this.data[this.length-1]
    delete this.data[this.length-1];
    this.length--
    return lastItem;

  }

  get(index)
  {
    return this.data[index]
  }

  shift(){
    const firstElement = this.data[0]

    //reindexing

    for(let i=0;i< this.length;i++){
      this.data[i] = this.data[i+1];
    }

    delete this.data[this.length-1];
    this.length--;
    return firstElement;

  }

  deleteByIndex(index){
    const item = this.data[index]

    for (let i =index; i<this.length-1;i++){
      this.data[i] = this.data[i+1]
    }

    delete this.data[this.length-1];
    this.length--;

    return item

  }

}


const myNewArray = new MyArray()
console.log(myNewArray.push('Good'))
console.log(myNewArray.push("Bad"))
console.log(myNewArray.push("Excellent"))
console.log(myNewArray.push("Satisfactory"))
console.log(myNewArray.push("Can do better"))
console.log(myNewArray.push("Very Good"))
// console.log(myNewArray.data)
// console.log(myNewArray.pop())
// console.log(myNewArray.data)
// console.log(myNewArray.push('uuu'))
// console.log(myNewArray.push("vvv"))
// console.log(myNewArray.push('rr'))
// console.log(myNewArray.push("cf"))
// console.log(myNewArray.data)
// console.log(myNewArray.get(4))
// console.log(myNewArray.shift())
// console.log(myNewArray.shift())
// console.log(myNewArray.shift())



console.log(myNewArray.data)
console.table(myNewArray.deleteByIndex(0))
console.table(myNewArray.deleteByIndex(3))
console.log(myNewArray.data)
