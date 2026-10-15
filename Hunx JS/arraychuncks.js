const arrayChunks = (array, chunkSize)=>{
    let chunkedArray = [];
    if (chunkSize <= 0){
        return []
    } else {
        for (let i = 0; i < array.length; i = i + chunkSize) {

            let chunked = array.slice(i, i + chunkSize)
            chunkedArray.push(chunked)
        }
        return chunkedArray
    }
}
console.log(arrayChunks([1,2,3,4,5],0))


//Time Complexity: $O(n)$ — You visit every element of the array once
//Space Complexity: $O(n)$ — You create a new array to hold the chunks

//without for loop solution suggested by AI
const arrayChunkss = (array, chunkSize) => {
    if (chunkSize <= 0) return [];
    return Array.from({ length: Math.ceil(array.length / chunkSize) }, (_, i) =>
        array.slice(i * chunkSize, i * chunkSize + chunkSize)
    );
};

console.log(arrayChunkss([1,2,3,4,5],0))