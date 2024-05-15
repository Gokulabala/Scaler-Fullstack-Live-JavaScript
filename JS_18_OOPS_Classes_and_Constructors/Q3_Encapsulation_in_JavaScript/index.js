// Q3. JS Core: Encapsulation in JavaScript

// You are building a simple banking system. Implement a BankAccount class with private properties accountNumber and balance. Create methods for deposit and withdraw that modify the balance property accordingly.

// Problem Description:
// Create a class BankAccount with private properties accountNumber and balance. The accountNumber should be generated automatically when a new account is created.
// Implement a private method generateAccountNumber to generate a unique account number for each account.
// Implement public methods deposit and withdraw that allow users to modify the balance property. Ensure that withdrawals cannot result in a negative balance. return 'Insufficient funds' in such cases.


// Please make sure the below test cases are fulfilled:

//   const account = new BankAccount();
//   console.log(account.deposit(1000)); // Output: 1000
//   console.log(account.withdraw(500)); // Output: 500
//   console.log(account.withdraw(1000)); // Output: "Insufficient funds"

class BankAccount {
    #accountNumber;
    #balance;
  
    constructor() {
      this.#accountNumber = this.generateAccountNumber();
      this.#balance = 0;
    }
  
    generateAccountNumber() {
      // Generate a random account number logic (for simplicity, using a fixed number here)
      // Write Code here ========
      let x = 2;
    }
  
    deposit(amount) {
        // Write Code here ========
        this.#balance = this.#balance + amount
        return this.#balance
    }
  
    withdraw(amount) {
        // Write Code here ========
        if(amount>=this.#balance){
            return "Insufficient funds"
        }
        else{
            return  this.#balance - amount  
        }
    }
  }