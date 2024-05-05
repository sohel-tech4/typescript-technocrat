{
// mapped types
// Map এ আমরা দেখি যে লুপ করে বার বারে এ্যারে থেকে নাম্বার বা সংখ্যা বের করে-
    const ArrayofMy : number[] = [1,2,3,4,5]
    const ArrayofBro : string[] = ["1", "2"]

    const newArray = ArrayofBro.map(Arr =>{
        const myArray = parseFloat(Arr)
        console.log(myArray)
    }) 

type Maesurement= {
    height : string;
    width: string
}

type MyHisab = {
    [key in keyof Maesurement] : number
}

// MyHisab কে Mapped Types দ্বারা খুব সহজে Maesurement এর কিই গুলোর ভ্যালু চেঞ্জ করে দিলো।




type myFriend = {
    friend : string;
    friend2 : number;
    Abul : boolean
}

// এখানে myFriend যাই থাকুক না কেনো Mapped Typesেএর মাধ্যমে খুব সহজে চেঞ্জ করা গেলো।

type FinalFriend = {
    [key in keyof myFriend] : boolean //কি টাইপ করবো সেটি এখানে বলে দিতে হবে-
}

type Maesurement1= {
    height : string;
    width: string
}

type height = Maesurement1["height"] //Look up types


// Final Mapped Types 

type myBox = {
    height : string;
    width: string
} 

// T=> {height : string; width: number}
// key => T["width"]
type changeMyBox<T> = {
    [key in keyof T] : T[key]
}

const MyBigBox : changeMyBox<{height : string; width: number}> = {
    height : "100",
    width: 100
}





}