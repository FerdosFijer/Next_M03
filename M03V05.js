//! Every Link list has a previous and next node and every node has a value.
//! Train example diye bujaiche
//! Song list like youtybe, spotify etc jeikhan a amra song add korte pari


// Learn from M03V06 and inclement the code of M03V05.js

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
const head = new Node(10);
// console.log(head);
// console.log(head.next);

head.next = new Node(20);
head.next.next = new Node(30);

console.log(head);
console.log(head.next);
