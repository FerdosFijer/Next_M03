class Stack {
  constructor() {
    this.items = [];
  } 
  push(value) {    //* O(1)
    this.items.push(value);
  }
  pop() {     //* O(1)
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.pop(); //! .pop korle sas theke ber hoy
  }
  peek() {     //* O(1)
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.items.length - 1];
  }
  isEmpty() {   //* O(1)
    return this.items.length === 0;
  }
  print(){    //* O(n)
    console.log(this.items.slice().reverse().join(" → "));  
    //.slice meaning original output akta copy kore rakhe then .revers().join("→") pore add korsi print stack e j sas e dukse se protome dekabe and next console.log() output gulo .slice() er jonno original ta theke nibe jeta copy hoye ache 
  }
}
const stack = new Stack();
console.log(stack.peek());
console.log(stack.isEmpty());

stack.push(20);
stack.push(30);
stack.push(40);
stack.print();

console.log(stack.peek());
console.log(stack.pop());
console.log(stack.pop());


