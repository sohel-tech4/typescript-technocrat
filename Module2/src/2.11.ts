{
    // Utility Types
    // Pick
    type myFriend = {
        name : string;
        age : number;
        contactNo: string
    }

    type NameAge = Pick<myFriend, "name" | "age">

    // এখানে Pick< এর মাধ্যমে ধরা হচ্ছে-- myFriend, "name" | "age"> কি কি কিই গুলো নিবে আগে সেগুলো সেটাপ করতে পারে।


    // Omit 
    type ContactMy = Omit<myFriend, "contactNo" | "name">

    // Required যেখানে সবগুলো টাইপ নিজের করা নতুন টাইপে নিয়ে আসা।

    type friendMy = Required<myFriend>

    // Partial এখানে সব গুলো টাইপ আসবে এবং সাথে undefined সহ আসবে। Or বা union টাইপ করে দিবে।
    type HeisBoy = Partial<myFriend>


    // Read Only

    type myFriendRead = Readonly<myFriend>

    const Person2 : myFriendRead = {
        name : "x",
        age: 25,
        contactNo: "1777"
      }


    Person2.name



}