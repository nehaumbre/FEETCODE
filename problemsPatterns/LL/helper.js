class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // 1. Add element to the end (Append) - O(N)
    append(val) {
        const newNode = new ListNode(val);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    // 2. Add element to the front (Prepend) - O(1)
    prepend(val) {
        const newNode = new ListNode(val, this.head);
        this.head = newNode;
        this.size++;
    }

    // 3. Insert at a specific index - O(N)
    insertAt(val, index) {
        if (index < 0 || index > this.size) return false;
        if (index === 0) {
            this.prepend(val);
            return true;
        }

        const newNode = new ListNode(val);
        let prev = this.head;
        for (let i = 0; i < index - 1; i++) {
            prev = prev.next;
        }
        newNode.next = prev.next;
        prev.next = newNode;
        this.size++;
        return true;
    }

    // 4. Delete node by value - O(N)
    delete(val) {
        if (!this.head) return false;

        if (this.head.val === val) {
            this.head = this.head.next;
            this.size--;
            return true;
        }

        let current = this.head;
        while (current.next && current.next.val !== val) {
            current = current.next;
        }

        if (current.next) {
            current.next = current.next.next;
            this.size--;
            return true;
        }
        return false;
    }

    // 5. Search for a value - O(N)
    find(val) {
        let current = this.head;
        while (current) {
            if (current.val === val) return current;
            current = current.next;
        }
        return null;
    }

    // 6. Reverse the Linked List in-place - O(N)
    reverse() {
        let prev = null;
        let current = this.head;

        while (current !== null) {
            let nextTemp = current.next; // Store next node
            current.next = prev;         // Reverse current pointer
            prev = current;              // Move prev forward
            current = nextTemp;          // Move current forward
        }

        this.head = prev;
    }

    // Helper: Print list as an Array
    toArray() {
        const result = [];
        let current = this.head;
        while (current) {
            result.push(current.val);
            current = current.next;
        }
        return result;
    }
}


//Quick usage example
const list = new LinkedList();

list.append(10);
list.append(20);
list.append(30);
console.log(list.toArray()); // Output: [10, 20, 30]

list.prepend(5);
console.log(list.toArray()); // Output: [5, 10, 20, 30]

list.insertAt(15, 2);
console.log(list.toArray()); // Output: [5, 10, 15, 20, 30]

list.delete(10);
console.log(list.toArray()); // Output: [5, 15, 20, 30]

list.reverse();
console.log(list.toArray()); // Output: [30, 20, 15, 5]

//When solving LeetCode problems, you often need to convert an array into a Linked List for testing:

function createLinkedList(arr) {
    const dummy = new ListNode(0);
    let current = dummy;
    for (const val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

// Usage:
const head = createLinkedList([1, 2, 3, 4, 5]);