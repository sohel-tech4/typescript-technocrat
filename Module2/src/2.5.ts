{
    
    // Function 
    // ফাংশনকেও আমরা জেনেরিকভাবে লিখে রিইউজ করতে পারি। 
    // এটা হলো নরমাল ফাংশন-

    const Add = (param: string) : string[] =>{
        return [param]
    }

    // Generic Function
    // এখানে যে কোন টাইপের ডাটা পাঠালে সে সেই টাইপের ডাটার একটি এ্যারে রিটার্ন করবে।

    const AddSum = <T>(param:T): T[] =>{
        return [param]
    }

    // এখানে যদি অবজেক্ট পাঠাই সেক্ষেত্রে আমরা লিখে দিতে পারি কোনটা কি টাইপের ডাটা পাঠাচ্ছি।
    
    type NewObject = {
        name: string; 
        Roll: number
    }

    const newSum1 = AddSum<number>(25)
    const newSum2 = AddSum<string>("25")
    const newSum3 = AddSum<NewObject>({name: "Sajib", Roll: 25})

    // ডাবল প্যারামিটার টাইপের ডাটা আমরা যেভাবে পাঠাতে পারি-
    const AddToupleSum = <T, Q, R>( param1: T, param2: Q, param3: R) : [T, Q, R] => {
        return [param1, param2, param3]
    }

    type object2 = {
        name: string;
        Roll: 25
    } 

    const newTouple = AddToupleSum<number, string, object2>(1,"2", {name: "string", Roll: 25})
    // এখানে আমরা বলতে দিতে পারি যে কি টাইপের ডাটা পাঠাচ্ছি-
    // আমরা চাইলে অবজেক্টও পাঠাতে পারি-

    //আমরা জেনেরিক ভাবে একটা ফাংশ তৈরী করতে পারি যেটাতে যে কোন টাইপের ডাটা পাঠাতে পারি যে কয়টাই হোক না কেন-

    const AddGenericTouple = <T>(Student: T) =>{
        const classs = "Next Level Developer"
        // এখানে যে কয়টা প্যারামিটার পাঠাইনা কেনো তাতে কোন সমস্যা নাই।-
        // এখানে class নামে এক্সট্রা একটা ভ্যালু যে এই ফাংশনকে কল করবে সবার ভিতরে এটা থাকবে-
        return {
            ...Student,
            classs
        }
    }

   AddGenericTouple({name: "Sohel", Roll: 25, Wife: false})

}