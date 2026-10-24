//bubble sort

const Bubble = (numArray) =>{
    for(let i=0;i< numArray.length;i++){
        let swapped = false
        for(let j=0;j<numArray.length-1;j++){
            if(numArray[j]>numArray[j+1]){
                let temp = numArray[j];
                numArray[j]=numArray[j+1];
                numArray[j+1]=temp;
                swapped = true;
            }
        }
        if(!swapped) break; //if no swaps we stop
    }
    return numArray;
}

console.log(Bubble([5,1,4]))
console.log(Bubble([1,4]))

const Selection = (numArray) =>{
    for(let i=0;i<numArray.length;i++){
        let minIndex = i
        for (let j=i+1;j<numArray.length;j++){
            if(numArray[j]<numArray[minIndex]){
                minIndex = j;
            }
        }
            let temp = numArray[i];
            numArray[i] =numArray[minIndex]
            numArray[minIndex]=temp;

    }
    return numArray;
}
console.log(Selection([5,1,4]))
console.log(Selection([1,4]))

const Insertion = (numArray) =>{

}