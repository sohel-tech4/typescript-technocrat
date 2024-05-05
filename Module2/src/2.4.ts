{
// Interface Generic
// পূর্বে আমরা type Generic দেখলাম এখানে আমরা দেখবো কিভাবে Interface এ জেনেরিক ব্যবহার করা যায়।


interface FrontEndDeveloer2<T, S = null>  { //এখানে S = null অনেকের ফ্রেন্ড থাকবে না তাই সে বিষয়টা নাল হিসেবে ধরে নিবে।
    name : string;
    age: number;
    skills: T;
    friends?: S
}

// ইন্টারফেস এর মাধ্যমে কোডগুলোকে আরো সংক্ষেপে লেখা হয়েছে। 

interface PoorDeveloer {
    front: string;
    Back:string
}

interface Friend {
    name : string;
    age : 25
}

// <PoorDeveloer, Friend> যেহেতু <T, S = null> দুইটা বলে ২ টি প্যারামিটার নিয়েছি। 

const FrontEndDeveloer: FrontEndDeveloer2<PoorDeveloer, Friend> = {
    name : "Akir",
    age: 25,
    skills: {
        front: "Good",
        Back: "Good"
    },
    friends: {
        name: "Masud",
        age: 25
    }
}

// চাইলে সেম জেনেরিক ইন্টারফেসটি অন্য কোথাও ইজ করতে পারি।

interface RichDeveloer {
    front: string;
    Back:string
}

const RichDeveloper : FrontEndDeveloer2<RichDeveloer> = {
    name: "Nazmul",
    age: 26,
    skills: {
        front : "NextJS",
        Back : "MongoDB"
    }
}

}