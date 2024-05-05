{
// Generic Type
// জেনারালােইজ করে ফেলা-
// সেইম টাইপ ডিফাইন করে সেটাকে রিইউজ এবল করে ফেলা।
// এখানে একটা জেনেরিক েএরে দিয়ে অনেক গুলো ভ্যারিএবল ব্যবহার করতে পারি।
// type GenericArray<T প্যারাম> = Array<T প্যারাম> যেহেতু এ্যারে তাই = Array<T>
//Normal type
// type GenericArray = string[]         

type GenericArray<T> = Array<T>

const MyInfo: GenericArray<string>= ["Sohel", "Rana"]
const MyDetails: GenericArray<number> = [1,2,3,4,56]
const MyBool: GenericArray<boolean> = [true, false, true]

// অবজেক্টেও আমরা সেম টাইপ টা ইউজ করতে পারবো-
const MyFriends : GenericArray<{name: string, Age: number, Married: boolean}> = [
    {
        name: "Akir",
        Age: 25,
        Married: true
    },
    {
        name: "Sajal",
        Age: 24,
        Married: false
    },
    {
        name: "Nasir",
        Age: 24,
        Married: false
    }
]

// Touble (যেই এ্যারেতে একাধিক টাইপ থাকে অর্থাৎ number, boolean, string etc) এ আমরা এই জেনেরিক টাইপটা ব্যবহার করতে পারি।
// Arrayr ইনডেক্স যতগুলো হবে প্যারামিটার হিসাবে ঠিক ততগুলো প্যারাম পাঠাতে হবে-

type GenericArray2<x, y, z> = [x, y, z]

const Sajal : GenericArray2<number, {Marrid: boolean, Education: string, contact: string}, string> = [25, {Marrid: false, Education: "Masters", contact: "0177"}, "hello"]
console.log(Sajal)


}