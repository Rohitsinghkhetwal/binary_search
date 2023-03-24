// class person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     } 
//     speak() {
//         console.log("say nothing");
//     }
//     sayName() {
//         console.log("What is my name")
//     }
// }

// const result = new person("Rohit", "24");
// console.log(result.speak())


// function BankAc(name,balance) {
//     this.name = name;
//     this.account = Date.now();
//     this.balance = balance;

//     // method
//     this.deposit = function(amount) {
//         this.balance+= amount;

//     }
//     this.withdraw = function(amount) {
//         this.balance-= amount;

//     }


// }

// const Aditya = new BankAc("aadi", 1000);
// const Rohit = new BankAc("Rohit", 3000)
// Rohit.deposit(2000)
// Rohit.withdraw(2000);
// Aditya.deposit(2000);
// console.log(Aditya, Rohit)

class Bank {
    #balance = 0;
    constructor(name, balance) {
        this.name = name;
        this.#balance = balance;
        this.AccNo = Date.now();
    }

    deposit(amount) {
        this.#balance += amount;
        console.log("hey I am under the water please helpme!")
    }

    Withdraw(amount) {
        this.#balance -= amount;
    }

    setBalance(amount) {
        this.#balance = amount;

    }

    getBalance() {
        return this.#balance;
    }
}

class CoBank extends Bank {
    constructor(name, balance ) {
        super(name, balance);
    }

    ApplyforLoan(amount) {
        console.log("Taking personal loan: "+ amount)
        
    }


}


const obj2 = new Bank("Shalu", 433);
// obj2.deposit(45)
// obj2.setBalance("hllo");
// obj2.getBalance(34);
obj2.getBalance();
obj2.setBalance(22)


console.log(obj2)

// console.log(result)