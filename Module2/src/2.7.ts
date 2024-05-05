{
    // যে X extends keyof T অর্থাৎ X extend "name" | "email" | "roll"
    
    const SeeWithKey = <T, X extends keyof T>(Obj:T, Key:X) => {
        return Obj[Key]
    }

    const User = { 
        name : "Sohel",
        email: "x@x.com",
        roll: 25
    }
    SeeWithKey(User, "roll")
}