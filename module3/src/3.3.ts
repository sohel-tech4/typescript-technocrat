{
    
    // এখানে টাইপ অফ ইউজ করে এটি চেক করতেছে যে, এটি নাম্বার নাকি স্ট্রিং- একে বলে টাই গার্ড
    
    // Type of Guard
    type AddSum = string | number;
    
    const Add = (param1: AddSum, param2: AddSum) : AddSum=>{
        if(typeof param1 === "number" && typeof param2 === "number"){
            return param1 + param2
        } else {
            return param1.toString() + param2.toString()
        }
    }

    console.log(Add("2",5))



     // Type in Guard

    //  এখানে দুইটা ওবজেক্টের মধ্যে েএর রোল চেক করে দেখেছে যে কোন ভ্যারিয়েবলে রোল টাইপ বলতে কিছু রয়েছে কিনা দেন- এটি চেক করে বলতেছে যে, যদি রোল হয়  তো এডমিন আর নাথে তো এডমিন না।


     type normalUser = {
        name : string
     }

     type AdminUsr = {
        name: string,
        role: string
     }

     const GetUser = (user : normalUser | AdminUsr) =>{
        // user.name এখানে user এর পর . দিলে সেই ভ্যারিয়েবলে কি কি ডাটা আসবে সেগুলো শো করবে ।
        // আবার টাইপ ইন দিয়ে শর্ত করে দিলে user এর পর . দিলে অন্যান্য প্রোপার্টি গুলো দেখাবে। 
        if('role' in user){
            console.log("Amdin User")
        } else{
            console.log("Normal User")
        }
     }

     const Abir : normalUser = {
        name : "abir"
     }

     const Sajal : AdminUsr = {
        name : "abir",
        role : "admin"
     }
     GetUser(Sajal)
}