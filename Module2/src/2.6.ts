{
    // Constraints
    // এখানে কোন ফাংশনকে যখন কল দিবে তখন কিছু প্রোপার্টি থাকবে যেগুলো অবশ্যই দিতে হবে না হলে সেটাকে কল করা সম্ভব নয়-

    const AddGenericTouple = <T extends {name:string, Roll: number, Wife: boolean}>(Student: T) =>{
        const classs = "Next Level Developer"
        // এখানে যে কয়টা প্যারামিটার পাঠাইনা কেনো তাতে কোন সমস্যা নাই।-
        // এখানে class নামে এক্সট্রা একটা ভ্যালু যে এই ফাংশনকে কল করবে সবার ভিতরে এটা থাকবে-
        return {
            ...Student,
            classs
        }
    }

    const AddAdd = <T>(Student: T) => {
        return {Student}
    }

   AddGenericTouple({name: "Sohel", Roll: 25, Wife: true, Friend: true})

}