//* example 01 from video M03V01 example 02 and same code first video te likhe raksi sudu bujar jonno;
/* let count = 0;
const counter = (amount) => {

    count = count + amount;
    return count;
};
console.log(counter(2));
console.log(counter(3)); */

//* Example 02 er moto kore closer banabo which name is "closer" which more efficient

/* const createCounter = () => {
  let count = 0;
  return (amount) => {
    count = count + amount;
    return count;
  };
};
const counter = createCounter();
console.log(counter(2));
console.log(counter(3)); */

//* Example 03 BEST WAY to make counter with class more readable with reuable code 

class Counter {         // class er por capital letter diye name lekha hoy
    constructor(count){      // constructor object k constrruct kore value k hold kore rakhe
        this.count = count;  // this keyword diye vitore j count ta hosse seta hold kortese
    }
    add(amount){
        this.count = this.count + amount;
    }
    print(){
        console.log(this.count);
    }
}
const counter1 = new Counter(0);
counter1.add(7);
counter1.add(4);
counter1.print();

const counter2 = new Counter(20);
counter2.add(10);
counter2.add(30);
counter2.print();