

//Core theory
// hashing-> gives you -> hash function->that-> converts key into integer(hashcode)
//hash table uses hash(key) % capacity as an array index sp lookup,insert,delete become
// O(1) on average instead of O(n) (list) or O(log n) BST
//Properties of good hash
// same key always gives same hash
//spreads key evenly across buckets
//fast: O(length of key)
//consistent with equality : if a==b then hash(a) = hash(b) (the reverse need not hold)

//collisions: two keys land in same bucket
//hence unavoidable
//strategy
// 1. Separate chaining: Each bucket hold list of entries. Simple. load factor can exceed 1
//2. Linear probing:  Try i, i+1,i+2,...Cache friendly suffers primary clustering
//3.Quadratic probing : try  i+1^2,i+2^2.less clustering
//4. Double hashing : step size from a second hash . best distribution among probing schemes
//cuckoo hashing- 2 tables/function kick out and relocate O(1) worst case lookup
class HashTable{
    constructor(size=10){
        this.capacity = size
        this.buckets = new Array(size).fill(null)
    }
    hash(key){
        let sum = 0,i=0;

        while(i<key.length){
            sum += key.charCodeAt(i)
            i++
        }
        return sum % this.capacity;
    }

    set(key,value){
        // 1. Get the index using your hash method
        const index = this.hash(key)

        // 2. If the bucket is null, make it an array
        if(this.buckets[index]===null){
            this.buckets[index] = []
        }

        // 3. Get the bucket for easier access
        const bucket = this.buckets[index];

        for(let i=0;i<bucket.length;i++){
            if(bucket[i][0]===key){
                bucket[i][1] = value
                return
            }
        }

        bucket.push([key,value]);
    }

    get(key) {
        // 1. Find the index (The "Shelf")
        const index = this.hash(key)
        const bucket = this.buckets[index];

        //2. if shelf empty , no key here
        if(bucket===null){
            return undefined
        }

        //3. search thu pairs in buckets
        for(let i=0;i<bucket.length;i++){
            if(bucket[i][0]===key){
                return bucket[i][1]
            }
        }
        return undefined
    }

    getAllKeysAndValues(){
        let allKeysAndValues = [];

        for(let i=0;i<this.capacity;i++){
            const bucket = this.buckets[i]

            if(bucket){
                for(let j=0;j<bucket.length;j++){
                    allKeysAndValues.push(bucket[j]);
                }
            }
        }
        return allKeysAndValues
    }

    twoSum(nums,target){
        let sum = new HashTable()

        for(let i=0;i< nums.length;i++){
            let complement = target - nums[i]
            let complementIndex = sum.get(complement)

            if(complementIndex !== undefined) {
                return [complementIndex,i]
            }
            sum.set(nums[i],i)
        }
        return null  // Always return something if no match is found
    }

    wordCounter(string){
        let cleanedInput = string.toLowerCase().replace(/[^\w\s]/g, " ").split(/\s+/);

        let counts = new HashTable()

        for(let word of cleanedInput){
            if(word==="") continue

            let currentCount = counts.get(word)

            if(currentCount===undefined){
                counts.set(word, 1)
            }else{
                counts.set(word, currentCount+1)
            }
        }
        return counts.getAllKeysAndValues();
    }
}

// let myTable = new HashTable();
// console.log(myTable.hash("DOG"));

let myTable = new HashTable();

myTable.set("Name", "Neha");
myTable.set("City", "Delhi");
myTable.set("Age", "21");

console.log("Get Name:", myTable.get("Name")); // Expected: "Neha"
console.log("Get City:", myTable.get("City")); // Expected: "Delhi"
console.log("Get Age:", myTable.get("Age"));   // Expected: "21"

// Testing Update (Updating "Name" from Neha to "Nehal")
myTable.set("Name", "Nehal");
console.log("Updated Name:", myTable.get("Name")); // Expected: "Nehal"

// Testing something that doesn't exist
console.log("Get Country:", myTable.get("Country")); // Expected: undefine

let myTableNeha = new HashTable();
myTableNeha.set("Name", "eliese");
myTableNeha.set("City", "Geneva");
myTableNeha.set("Age", "21");

console.log("All Entries:", myTableNeha.getAllKeysAndValues());
// Expected: [ ["Name", "Neha"], ["City", "Delhi"], ["Age", "21"] ]
// (Note: The order might change depending on the hash indices!)

console.log(myTableNeha.wordCounter("The cat sat on the mat, and the cat liked the mat"))


// Using a unique name to avoid collisions with other parts of your code
let twoSum_verifier = new HashTable();

console.log("\n--- TWO SUM MANUAL VERIFICATION ---");

// Case 1: Standard Unsorted (2 + 7 = 9)
let res1 = twoSum_verifier.twoSum([2, 7, 11, 15], 9);
console.log(`Test 1: [2, 7, 11, 15], Target 9 -> Got: ${JSON.stringify(res1)} | Expected: [0, 1]`);

// Case 2: Target at the ends (2 + 4 = 6)
let res2 = twoSum_verifier.twoSum([3, 2, 4], 6);
console.log(`Test 2: [3, 2, 4], Target 6 -> Got: ${JSON.stringify(res2)} | Expected: [1, 2]`);

// Case 3: Duplicate numbers (3 + 3 = 6)
let res3 = twoSum_verifier.twoSum([3, 3], 6);
console.log(`Test 3: [3, 3], Target 6 -> Got: ${JSON.stringify(res3)} | Expected: [0, 1]`);

// Case 4: No solution exists
let res4 = twoSum_verifier.twoSum([1, 2, 3], 7);
console.log(`Test 4: [1, 2, 3], Target 7 -> Got: ${JSON.stringify(res4)} | Expected: null`);

// Case 5: Negative numbers (-3 + -5 = -8)
let res5 = twoSum_verifier.twoSum([-1, -2, -3, -4, -5], -8);
console.log(`Test 5: [-1, -2, -3, -4, -5], Target -8 -> Got: ${JSON.stringify(res5)} | Expected: [2, 4]`);

console.log("--- VERIFICATION COMPLETE ---");
