let current = new Date("2025-08-08");
let day = current.getDay();
console.log(current);          // prints full Date object
console.log(current.toString()); // prints date as local string
console.log(day);              // prints day of week (0=Sun,1=Mon,...)

class sample{
    constructor(personname){
        this.person=personname;
        console.log(personname)
    }
}

let result=new sample("js");
class Bank{
    constructor(initialamount=0){
        this._balance=initialamount;
    }
    get balance(){
        return this._balance;
    }
    set balance(amount){
        if(amount>0){
            this._balance+=amount;
            console.log(amount);
        }
    }
}
let b=new Bank(10);
console.log(b)

b._balance=100;
console.log(b._balance)