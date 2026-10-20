console.log("About stacks")

class Element {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor() {
        this.top = null
    }


    push(value) {
        let element = new Element(value)
        element.next = this.top
        this.top = element
    }

    pop() {

        if(!this.top) {
            console.error("Error Operation: Popping from empty stack!")
            return
        }
        let popValue = this.top.value
        this.top = this.top.next
        return popValue;
    }

    peek(){
        if(!this.top) {
            console.error("Error Operation: Nothing to peek")
            return
        }
        return this.top.value
    }

    validParenthesis(inputString){
        let i=0
        while(i<inputString.length){
            if(inputString[i] === '{' || inputString[i] === '[' || inputString[i] === '(' ){
                this.push(inputString[i])
            }
            if(inputString[i] === '}' || inputString[i] === ']' || inputString[i] === ')'){
                let popped = this.pop()
                if(!popped) return false

                if(inputString[i] === '}' && popped !== '{') return false
                if(inputString[i] === ')' && popped !== '(') return false
                if(inputString[i] === ']' && popped !== '[') return false

            }
            i++
        }

        if(this.top !== null){
            return false
        }

        return true
    }

    validParenthesisES6(string){
        const pairs = new Map ( [
            [')', '('],
            ['}', '{'],
            [']', '[']
        ])
            for (const char of string){
                if(pairs.has(char)){
                    if(this.pop() !== pairs.get(char)) return false
                }
                else if('{(['.includes(char)) {
                    this.push(char)
                }
            }
            return !this.top
        // Return true if stack is empty (!this.top), false otherwise

    }

    reverseString(string){
        let reversed = []
        let i =0
        while(i<string.length){
            this.push(string[i])
            i++
        }

        while(this.top){
            reversed.push(this.pop())
        }

        return reversed
    }
}

console.log("\n--- STARTING STACK TESTS ---");

let myStack = new Stack();

// 1. Test Push
console.log("Pushing: A, B, C");
myStack.push("A");
console.log(myStack)
myStack.push("B");
console.log(myStack)
myStack.push("C");

console.log(myStack);
// 2. Test Pop (Should be reverse order: C, B, A)
console.log("Popping first item (Expected C):", myStack.pop());
console.log(myStack)
console.log("Popping second item (Expected B):", myStack.pop());
console.log(myStack)
console.log("Popping third item (Expected A):", myStack.pop());
console.log(myStack)

// 3. Test Empty Stack (The Guard Clause)
console.log("Popping from empty stack (Expected Error):");
myStack.pop(); // Should print "Error Operation!.Stack is Empty"

console.log("\n--- STARTING STACK PEEK TESTS ---");

let peekStack = new Stack();

// Case 1: Peek at an empty stack
console.log("Testing peek on empty stack (Expected Error):");
peekStack.peek(); // Should print "Error Operation: Nothing to peek"

// Case 2: Peek at a stack with items
peekStack.push("Apple");
peekStack.push("Banana");
peekStack.push("Cherry");

console.log("\nStack is now: Apple, Banana, Cherry (Top)");

// First Peek
console.log("First peek (Expected Cherry):", peekStack.peek());

// Second Peek (IMPORTANT: This proves it didn't remove the item!)
console.log("Second peek (Still Expected Cherry):", peekStack.peek());

// Now Pop and Peek again
console.log("\nPopping 'Cherry'...");
peekStack.pop();

console.log("Peek after pop (Expected Banana):", peekStack.peek());

console.log("--- STACK PEEK TESTS COMPLETE ---");


console.log("--- STACK TESTS COMPLETE ---");
console.log("\n--- STARTING ADVANCED STACK TESTS ---");

// ==========================================
// 1. TESTING reverseString()
// ==========================================
console.log("\nTesting reverseString:");
let revStack = new Stack();
console.log("Reversing 'Hello':", revStack.reverseString("Hello")); // Expected: ['o', 'l', 'l', 'e', 'H']
// Note: If you added .join(""), it will be "olleh"

// ==========================================
// 2. TESTING validParenthesis() (Standard)
// ==========================================
console.log("\nTesting validParenthesis (Standard):");

const testCases = [
    { input: "()", expected: true },
    { input: "()[]{}", expected: true },
    { input: "{[()]}", expected: true },
    { input: "(]", expected: false },
    { input: "([)]", expected: false },
    { input: "(((", expected: false },
    { input: ")))", expected: false },
    { input: "", expected: true },
];

testCases.forEach((test, index) => {
    let vStack = new Stack(); // FRESH STACK for every test
    const result = vStack.validParenthesis(test.input);
    console.log(`Case ${index + 1} [${test.input}]: ${result === test.expected ? "✅ PASS" : "❌ FAIL"} (Got ${result})`);
});

// ==========================================
// 3. TESTING validParenthesisES6() (Modern)
// ==========================================
console.log("\nTesting validParenthesisES6 (Modern):");

testCases.forEach((test, index) => {
    let es6Stack = new Stack(); // FRESH STACK for every test
    const result = es6Stack.validParenthesisES6(test.input);
    console.log(`Case ${index + 1} [${test.input}]: ${result === test.expected ? "✅ PASS" : "❌ FAIL"} (Got ${result})`);
});

console.log("\n--- ALL ADVANCED TESTS COMPLETE ---");

