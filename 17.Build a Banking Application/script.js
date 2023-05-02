/* OBJECT WITH DEPOSIT & WITHDRAW OBJECT METHOD */
const userDetails = {
    name: "John doe",
    balance: 25000,
    moneyDeposit: function(amount){
        return this.balance += amount;
    },
    moneyWithdraw: function(amount){
        return this.balance -= amount;
    }
}

/* CALLING THE METHOD */
console.log(userDetails.balance);
console.log(userDetails.moneyDeposit(5000));
console.log(userDetails.moneyWithdraw(25000));
console.log(userDetails.balance)
