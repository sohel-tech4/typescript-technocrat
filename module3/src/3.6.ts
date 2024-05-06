{
    // Getter and Setter
    // আগে আমরা গেট এবং ডিপোজিট করতাম 

    class Bank {
        public readonly id : number;
        public name: string;
        protected _amount : number 
        
        constructor(id: number, name: string,  _amount: number){
            this.id = id;
            this.name = name;
            this. _amount =  _amount
        }

        // Setter
        set Deposit(amount : number){
            this._amount = this._amount + amount
        }

        // GetDeposit( _amount : number){
        //     this._amount = this._amount +  _amount        
        // }

        // Getter
        // দুইটা একি কাজ এজন্য আমরা গেটার দিয়ে সেই এমাউন্ট কে গেট করতে পারি।
        get myBalance(){
            return this._amount
        }

        // getBalance(){
        //     return this. _amount
        // }


    }

    const MyBank = new Bank (111, "Johir", 200)
    const MyDeposit = MyBank.Deposit = 100
    const MyAmount = MyBank.myBalance 
    // MyBank.GetDeposit(1000)
    console.log(MyAmount)
    // const Get = MyBank.getBalance()
}