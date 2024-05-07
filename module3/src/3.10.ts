{
    class Bank {
        public readonly id : number;
        public name: string;
        protected _amount : number 

        constructor(id: number, name: string,  _amount: number){
            this.id = id;
            this.name = name;
            this. _amount =  _amount
        }
        private getBalance(){
            return this. _amount
        }
        // এখানে getBalance() private দেয়ার কারণে এটিকে অন্য স্থানে পাওয়া যাবে না বিধা এটিকে পাওয়ার জন্য আরেকটি ফাংশন থেকে নিচের মতো কল করতে পারি। তাহলে সব জায়গায় আমরা এটি দেখতে পারি। মূল্য এটিই হলো Encapsulation-
        getHiddenBalance(){
            this.getBalance()
        }

    }

    const MyBank = new Bank (111, "Johir", 20) 
    MyBank.getHiddenBalance()

}