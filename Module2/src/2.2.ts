{

type myFamily1 = {
    Mother: string;
    Father: string;
    Brother: number
}

interface myFamily2 {
    Mother: string;
    Father: string;
    Brother: number
}

type userWithRole = myFamily1 & {role:string}

// এখানে আমরা Type Alias এর মাধ্যমে প্রোপার্টি বাড়াতে পারলাম Intersec এর মাধ্যমে।

interface userWithRole1 extends myFamily1 {role:string}

interface userWithRole2 extends myFamily2 {role:string}

// Type Alias কেও আমরা Interface এর মাধ্যমে এর প্রোপার্টি বাড়াতে পারি।
const newMyFamily : userWithRole2 = {
    Mother: "Jharna",
    Father: "Rashid",
    Brother: 1,
    role: "Manager"
}

// Array এর ক্ষেত্রেও আমরা Interface use করতে পারি।

// Array
type Roll1 = number[]
const RollNumber:Roll1 = [1,2,3,4,5]

// Interface
interface Roll2 {
    [index: number] : number // number এখানে ভ্যালু গুলো কি টাইপের ডাটা সেটা
}

const RollNumber2: Roll2 = [1,2,3,4,5,6]

// Function এর ক্ষেত্রেও Type Alias এর মতো interface ও ব্যবহার করতে পারি।

// Function এর ক্ষেত্রে Type Alias
type add1 = (num1:number, num2:number) => number

// Function এর ক্ষেত্রে interface
interface add2 {
    (num1: number, num2: number) : number
}

const Add : add2 = (num1, num2) => num1+num2


}