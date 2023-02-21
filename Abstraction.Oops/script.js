
//without Abstraction//

class ATM{
    constructor(withdraw){
      this.balance= 2000;
        this.minimum = 500;
        this.withdraw = withdraw;
      
    }
    getAmount(){
      if ((this.balance-this.withdraw) >= this.minimum) {
        console.log("withdraw sucessfull");
      }else{
        console.log("withdraw failed");
      }
    }
    
  }
  let click = new ATM(2000);
  
  click.getAmount();

// with Abstraction//
// we can change the constructor elements out of the function//


class ATM{
    constructor(withdraw){
      this.balance= 2000;
        this.minimum = 500;
        this.withdraw = withdraw;
      
    }
    getAmount(){
      if ((this.balance-this.withdraw) >= this.minimum) {
        console.log("withdraw sucessfull");
      }else{
        console.log("withdraw failed");
      }
    }
    
  }
  let obj = new ATM(2000);
  obj.minimum=0;
  obj.getAmount();

// if we use the element in the methods we wil get an error//


class ATM{
    constructor(withdraw){
      this.balance= 2000;
   
        this.withdraw = withdraw;
      
    }
    getAmount(){
        let minimum = 500;
      if ((this.balance-this.withdraw) >= this.minimum) {
        console.log("withdraw sucessfull");
      }else{
        console.log("withdraw failed");
      }
    }
    
  }
  let obj = new ATM(2000);
  obj.minimum=0;
  obj.getAmount();