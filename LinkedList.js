class Node {
    data = null;
    next = null;
    constructor(data) {
      this.data = data;
    }
    setNext(next) {
      this.next = next;
    }
    setData(data) {
      this.data = data;
    }
    getNext() {
      return this.next
    }
    getData() {
      return this.data
    }
  }
  
  class LinkedList {
    head = null;
    addNode(newNode) {
      if (this.head === null) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        let current = this.head;
        while (current.getNext() != null) {
          current = current.getNext();
        }
        current.setNext(newNode);
        // this.tail.setNext(newNode)
      }
    }
    print() {
      let current = this.head;
      while (current != null) {
        console.log(current.getData());
        current = current.getNext();
      }
    }
    delete(index) {
      let current = this.head;
      for (let i=0; i < index-1; i++) {
        current = current.getNext();
      }
      let toDelete = current.getNext();
      current.setNext(toDelete.getNext());
      toDelete = null; // force the deletion
    }
    insert(index, newNode) {
      if (index==0) {
        newNode.setNext(this.head);
        this.head = newNode;
      } else {
        let current = this.head;
      for (let i =0; i < index-1; i++) {
        current = current.getNext();
      }
      newNode.setNext(current.getNext());
      current.setNext(newNode);
      }
      
    }
  }
  
  let ll = new LinkedList();
  ll.addNode(new Node("A"));
  ll.addNode(new Node("B"));
  ll.addNode(new Node("C"));
  console.log(ll.print());
  // ll.delete(1);
  // console.log(ll.print());
  
  // write an insert function that allows
  // you to insert a new node at index
  ll.insert(0, new Node("A#"));
  // ll.insert(1, new Node("B#"));
  
  console.log(ll.print())