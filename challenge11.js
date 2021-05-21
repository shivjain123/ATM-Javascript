function ATM(number){
    accNo = number;
    balance = 0;
    return{
        deposit : function(amount){
            if(amount > 0){
                balance += amount;
                return "Your Deposit of " + amount + " was successful";
            }
            else{
                return "Your Deposit of " + amount + " was unsuccessful; Deposit amount should be greater than 0"
            }
        },

        withdrawl : function(amount){
            if(amount > 0){
                if((balance - amount < 0)){
                    return "You have insufficient funds for this withdrawl";
                }
                else{
                    balance -= amount;
                    return "Please take your cash from the dispenser";
                }
            }
            else{
                return "Withdrawl amount should be greater than 0"
            }
        },

        getBalance : function(){
            return "The Balance in your account is " + balance
        },

        getAccount : function(){
            return "Your Account No. is " + accNo
        }
    }

}

banking = ATM("12345");

console.log();
console.log(banking.withdrawl(60));
console.log();
console.log(banking.deposit(100));
console.log();
console.log(banking.withdrawl(20));
console.log();
console.log(banking.getBalance());
console.log();
console.log(banking.getAccount());
console.log();