// ============================================================================
// Implementation Exercise: Queue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Queue and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.length = 0;
  }

  enqueue(value) {
    if (this.length === 0) {
      const newNode = new Node(value);
      this.front = newNode;
      this.back = newNode;
      this.length += 1;
      return this.length;
    }

    const previous = this.back;
    const newNode = new Node(value);
    this.back = newNode;
    previous.next = newNode;

    this.length += 1;
    return this.length;
  }

  dequeue(){
    if (!this.front) return null;  
    this.length -= 1;
      const first = this.front;
      const second = first.next;
    this.front = second;
    return first;

  }
}

exports.Node = Node;
exports.Queue = Queue;
