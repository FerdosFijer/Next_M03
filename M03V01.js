//! Stateless made by function
//* example 01
/* const counter = (amount) => {
    let count = 0;

    count = count + amount;
    return count;
};
console.log(counter(2));
console.log(counter(3)); */

//* example 02
/* let count = 0;
const counter = (amount) => {

    count = count + amount;
    return count;
};
console.log(counter(2));
console.log(counter(3)); */

//! Stateful
const counter = {
    count: 0,

    add(amount){
        this.count = this.count + amount;
    },
    print(){
        console.log(this.count); 
    },
};
counter.add(2);
counter.add(3);
counter.print();
