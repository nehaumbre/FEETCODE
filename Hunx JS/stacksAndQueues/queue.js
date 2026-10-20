//Queue is FIFO (First In, First Out). It's like a line at a store.
// Think of a line at a coffee shop:

// Enqueue (Join): You join at the TAIL. (Back of the line).
// Dequeue (Leave): The person at the HEAD gets their coffee and leaves. (Front of the line).

class Element{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    enqueue(value){
        let element = new Element(value);

        if(this.head === null && this.tail === null) {
            this.head = element;
            this.tail = element;
            return;
        }
        this.tail.next = element;
        this.tail = element;

    }

    dequeue(){
        if(this.head === null){
            console.error("Error: Empty Queue");
            return;
        }
        let current = this.head.value
        this.head = this.head.next;


        if (this.head === null){
            this.tail = null
        }

        return current
    }

    peek(){
        if(this.head === null){
            console.error("Error: Nothing to peek");
            return null;
        }
        return this.head.value
    }

    min() {
        if(this.head === null){
            console.error("Error: Empty Queue");
            return null;
        }
        let current = this.head;
        let minValue = this.head.value

        while(current !== null){
           if(current.value < minValue){
               minValue = current.value;
           }
           current = current.next;
        }
        return minValue;
    }
}

console.log("\n--- STARTING QUEUE TESTS ---");

let qTest = new Queue();

// 1. Test Empty State (Guard Clauses)
console.log("\nTesting Empty Queue:");
qTest.dequeue(); // Expected: "Error: Empty Queue"
console.log("Peek empty:", qTest.peek()); // Expected: "Error: Nothing to peek"
console.log("Min empty:", qTest.min()); // Expected: "Error: Empty Queue"

// 2. Test Enqueue (Adding items)
console.log("\nEnqueuing: 10, 5, 20, 2");
qTest.enqueue(10);
qTest.enqueue(5);
qTest.enqueue(20);
qTest.enqueue(2);

// 3. Test Peek (Should be the FIRST item added: 10)
console.log("Peek (Expected 10):", qTest.peek());

// 4. Test Min (Should be the smallest value: 2)
console.log("Min (Expected 2):", qTest.min());

// 5. Test Dequeue (Should be FIFO: 10, 5, 20, 2)
console.log("Dequeue 1 (Expected 10):", qTest.dequeue());
console.log("Dequeue 2 (Expected 5):", qTest.dequeue());

// 6. Test Min again (Now that 10 and 5 are gone, min should still be 2)
console.log("Min after two dequeues (Expected 2):", qTest.min());

// 7. Test Peek again (Next in line should be 20)
console.log("Peek after two dequeues (Expected 20):", qTest.peek());

// 8. Test Emptying the Queue
console.log("\nEmptying the rest of the queue...");
qTest.dequeue(); // removes 20
qTest.dequeue(); // removes 2
console.log("Final peek (Expected Error):");
qTest.peek(); // Expected: "Error: Nothing to peek"

console.log("\n--- ALL QUEUE TESTS COMPLETE ---");
