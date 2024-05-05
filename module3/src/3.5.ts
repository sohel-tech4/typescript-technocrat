{
    // Modifier
    // অনেক সময় আমরা ক্লাস প্রোপার্টি যখন ইউজ করি সেটার প্রোপার্টি গুলো ক্লাসেরর বাহির থেকে পরিবর্তন করা যায় এজন্য। কেউ সহজে পরিবর্তন যেনো না করতে পারে একজন্য আমরা কিছু প্রটেক্ট দেখবো।

    class Bank {
        public readonly id : number;
        public name: string;
        // private _amount : number //  _amount দেয়ার উদ্দেশ্য হলো এটা যে প্রাইভেট সেটা যেনো বুঝা যায়।
        protected _amount : number //  protected ব্যবহার করার একমাত্র কারণ হলো যে, যদি অন্য কোন ক্লাস এই মেইন ক্লাসের সাথে এক্সটেন্ডস করে তাহলে যেনো সে এই _balance পেতে পারে সেজন্য protected ব্যবহার করা হচ্ছে। 
        
        constructor(id: number, name: string,  _amount: number){
            this.id = id;
            this.name = name;
            this. _amount =  _amount
        }

        GetDeposit( _amount : number){
            this._amount = this._amount +  _amount        
        }
        getBalance(){
            return this. _amount
        }


        // যেহেতু প্রাইভেট হওয়ার কারণে বাহির থেকে চেঞ্জ করা সম্ভব না তাই ক্লাসের মধ্যে ফাংশন তৈরী করে সেখানে এর ভ্যালু চেঞ্জ করা সম্ভব।
    }

    const MyBank = new Bank (111, "Johir", 20) 
    MyBank.GetDeposit(1000)
    console.log(MyBank)
    const Get = MyBank.getBalance()
    console.log(Get);
}