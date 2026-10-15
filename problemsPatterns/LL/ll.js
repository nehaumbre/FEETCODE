class Node {
    constructor(value) {
        this.value = value //value
        this.next = null   //link to next node
    }
}


//manager of nodes
class LinkedList {
    constructor() {
        this.head = null //list starts empty so the head is null
    }

    insertAtHead(value){
        let newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
    }

    insertAtTail(value){
        let newNode = new Node(value)

        if(this.head === null){
            this.head = newNode
            return;
        }
        let current = this.head
        while(current.next !== null){
            current = current.next
        }
        current.next = newNode
    }

    insertAtIndex(value, index){
        //case1 : insert at very beginning
        //below line ensures that the head of your list is actually updated.
        if(index===0){
            this.insertAtHead(value)
            return
        }

        let newNode = new Node(value)
        let current = this.head
        let i = 0

        while(i < index-1 && current!==null){
            current = current.next
            i++
        }

        //case2:if index is out of bounds
        if(current === null){
            console.error('index out of bounds')
            return
        }
        newNode.next = current.next
        current.next = newNode
    }

    searchValue(target){
        let current = this.head

        while(current !== null){

            if(current.value === target){
                return true
            }
            current =current.next
        }
        return false
    }

    deleteValue(target) {
        let current = this.head

        if(!this.head){
            return false
        }
        if(this.head.value === target){
            this.head = this.head.next
            return true
        }
        while(current.next !== null && current.next.value !== target){
            current = current.next
        }

        if(current.next){
            current.next = current.next.next
            return true
        }
        return false
    }

    getSize() {
        let current = this.head
        let count = 0
        while(current !== null){

            count++
            current =current.next
        }
        return count
    }

    deleteAtIndex(index) {
        let current = this.head
        let i = 0

        if (!this.head) {
            console.error("Error: Cannot delete from an empty list.");
            return;
        }


        if (index === 0) {
            this.head = current.next
            return;
        }

        while (i < index - 1 && current !== null) {
            current = current.next
            i++
        }
        //if (current === null) checks if the node you are standing on exists.
        if (current === null) {
            console.error("Error: Index out of bounds. The list is not long enough to reach this position.")
            return
        }
        //if (current.next === null) checks if the node you are trying to delete exists.
        //To test that specific scenario, you need to try and delete the index exactly one position past the end of the list.
        //Here is the rule: If your list has 3 items, the valid indices are 0, 1, and 2. If you try to delete index 3, you will trigger that specific error.
        if (current.next === null) {
            console.error("Error: Index out of bounds. No node exists at the specified position.")
            return
        }
        current.next = current.next.next
    }

    reverseLinkedList(){
        let prev = null
        let current = this.head
        let next = null

        if(!this.head){
            console.error("Error: Index out of bounds. The list is empty.")
            return
        }

        while(current !== null){
            next = current.next
            //Bookmark, Flip, and Slide
            current.next = prev
            prev = current
            current = next
        }
        this.head = prev
    }

    hasCycle(){
        let fast = this.head
        let slow = this.head

        // We check fast and fast.next because fast moves two steps at a time.
        // If either is null, we've reached the end of the list.
        while(fast !== null && fast.next !== null ) {
            slow = slow.next      //move 1 step
            fast = fast.next.next  //move 2 steps

            // If they meet, there is a cycle!
            if (fast === slow) {
                return true
            }
        }
        // If the loop ends, we hit the end of the list (no cycle)
        return false
    }
    //cycle:
    //Safety: fast !== null && fast.next !== null prevents crashes.
    //Efficiency: You only traverse the list once (Time Complexity: $O(n)$).
    //Memory: You only use two variables (Space Complexity: $O(1)$).
    //Correctness: It handles empty lists, single nodes, and complex cycles perfectly.

    printList(){
        let arr = []
        let current = this.head

        while (current!==null){

            arr.push(current.value)
            current = current.next
        }
        return arr
    }
}

let myLinkedList = new LinkedList()
myLinkedList.insertAtHead("B")
myLinkedList.insertAtTail("4")
myLinkedList.insertAtTail("1")
myLinkedList.insertAtHead("@")
myLinkedList.insertAtTail("0")
myLinkedList.insertAtIndex('ggshs',1)
myLinkedList.insertAtIndex('On',4)
// console.log(myLinkedList.searchValue('@'))
console.log(myLinkedList.deleteValue('@'))
console.log(myLinkedList.deleteValue('@'))
//OUTPUT :@B41


let res  = myLinkedList.printList()

console.log(res)


let testList = new LinkedList();
testList.insertAtTail("A");
testList.insertAtTail("C");

testList.insertAtIndex("B", 1); // Should be A -> B -> C
testList.insertAtIndex("START", 0); // Should be START -> A -> B -> C
testList.insertAtIndex("END", 10); // Should print "Index out of bounds"
console.log(testList.searchValue("A"))
console.log(testList.getSize())


// testList.deleteAtIndex(0)
testList.deleteAtIndex(4)
// Expected Output: ["START", "A", "B", "C"]


let emptyList = new LinkedList();
emptyList.deleteAtIndex(0)
testList.reverseLinkedList()
console.log(testList.printList());
testList.reverseLinkedList()
emptyList.reverseLinkedList()
console.log(emptyList.printList())
console.log(testList.printList());
emptyList.insertAtHead('1')
emptyList.insertAtHead('5')
console.log(emptyList.printList());
emptyList.reverseLinkedList()

console.log(emptyList.printList());
// ==========================================
// FINAL MASTER TEST FOR REVERSE LINKED LIST
// ==========================================

console.log("\n--- STARTING REVERSE TESTS ---");

// 1. THE VOID CASE (Empty List)
console.log("\nTesting Void Case:");
let voidList = new LinkedList();
voidList.reverseLinkedList(); // Should print: "Error: Index out of bounds. The list is empty."
console.log("List status:", voidList.printList()); // Expected: []

// 2. THE PAIR CASE (Two Nodes)
console.log("\nTesting Pair Case:");
let pairList = new LinkedList();
pairList.insertAtTail("A");
pairList.insertAtTail("B");
console.log("Before:", pairList.printList()); // Expected: ["A", "B"]
pairList.reverseLinkedList();
console.log("After:", pairList.printList());  // Expected: ["B", "A"]

// 3. THE STANDARD CASE (Happy Path)
console.log("\nTesting Standard Case:");
let stdList = new LinkedList();
stdList.insertAtTail("A");
stdList.insertAtTail("B");
stdList.insertAtTail("C");
stdList.insertAtTail("D");
console.log("Before:", stdList.printList()); // Expected: ["A", "B", "C", "D"]
stdList.reverseLinkedList();
console.log("After:", stdList.printList());  // Expected: ["D", "C", "B", "A"]

// 4. THE YO-YO CASE (Double Reverse)
console.log("\nTesting Yo-Yo Case:");
let yoYoList = new LinkedList();
yoYoList.insertAtTail("A");
yoYoList.insertAtTail("B");
yoYoList.insertAtTail("C");
console.log("Original:", yoYoList.printList()); // Expected: ["A", "B", "C"]
yoYoList.reverseLinkedList();
console.log("Reverse 1:", yoYoList.printList()); // Expected: ["C", "B", "A"]
yoYoList.reverseLinkedList();
console.log("Reverse 2:", yoYoList.printList()); // Expected: ["A", "B", "C"]


// 5. THE SINGLE CASE (One Node)
console.log("\nTesting Single Case:");
let singleList = new LinkedList();
singleList.insertAtTail("A");
console.log("Before:", singleList.printList()); // Expected: ["A"]
singleList.reverseLinkedList();
console.log("After:", singleList.printList());  // Expected: ["A"]

console.log("\n--- ALL REVERSE TESTS COMPLETE ---");


// ==========================================================
// UNIQUE TEST SUITE FOR CYCLE DETECTION
// ==========================================================

console.log("\n--- STARTING CYCLE DETECTION TESTS ---");

// 1. THE VOID CASE (Empty List)
console.log("\nTesting Empty List:");
let cycleCheck_Empty = new LinkedList();
console.log("Has cycle?", cycleCheck_Empty.hasCycle()); // Expected: false

// 2. THE SINGLE CASE (One Node, No Cycle)
console.log("\nTesting Single Node (No Cycle):");
let cycleCheck_SingleNo = new LinkedList();
cycleCheck_SingleNo.insertAtTail("Solo");
console.log("Has cycle?", cycleCheck_SingleNo.hasCycle()); // Expected: false

// 3. THE SELF-LOOP CASE (One Node, pointing to itself)
console.log("\nTesting Single Node (Self-Cycle):");
let cycleCheck_SingleYes = new LinkedList();
cycleCheck_SingleYes.insertAtTail("Loop");
cycleCheck_SingleYes.head.next = cycleCheck_SingleYes.head; // Manual cycle
console.log("Has cycle?", cycleCheck_SingleYes.hasCycle()); // Expected: true

// 4. THE LINEAR CASE (Multiple Nodes, No Cycle)
console.log("\nTesting Standard List (No Cycle):");
let cycleCheck_Linear = new LinkedList();
cycleCheck_Linear.insertAtTail("1");
cycleCheck_Linear.insertAtTail("2");
cycleCheck_Linear.insertAtTail("3");
console.log("Has cycle?", cycleCheck_Linear.hasCycle()); // Expected: false

// 5. THE LOOP CASE (Multiple Nodes, pointing back)
console.log("\nTesting Standard List (With Cycle):");
let cycleCheck_Loop = new LinkedList();
cycleCheck_Loop.insertAtTail("Start");
cycleCheck_Loop.insertAtTail("Middle");
cycleCheck_Loop.insertAtTail("End");

// Manually tie the "End" node back to the "Middle" node
let runner = cycleCheck_Loop.head;
while (runner.next !== null) {
    runner = runner.next;
}
runner.next = cycleCheck_Loop.head.next; // Tie End -> Middle

console.log("Has cycle?", cycleCheck_Loop.hasCycle()); // Expected: true

console.log("\n--- ALL CYCLE TESTS COMPLETE ---");


/**
 * SINGLY LINKED LIST - MASTER PROGRESS TRACKER
 *
 * ✅ COMPLETED:
 * [x] Node Structure (Value, Next)
 * [x] insertAtHead / insertAtTail / insertAtIndex
 * [x] searchValue / getSize
 * [x] deleteValue / deleteAtIndex
 * [x] reverseLinkedList (Bookmark, Flip, Slide)
 * [x] hasCycle (Tortoise and Hare)
 * [ ] printSafeList (Cycle-safe visualization)
 *
 * ⏳ PENDING (Interview Challenges):
 * [ ] findMiddleNode() - Find middle in one pass using slow/fast pointers
 * [ ] deleteNthFromEnd(n) - Remove N-th node from the end using two-pointer gap
 * [ ] findCycleStart() - Locate the exact node where a cycle begins
 *
 * 🚀 FUTURE UPGRADES:
 * [ ] Tail Pointer - Add this.tail for O(1) insertAtTail
 * [ ] Doubly Linked List - Add this.prev to nodes for backward traversal
 * [ ] Circular Linked List - Connect tail back to head
 */
