{
    // Instace of Guard
    // আমরা এর পূর্বে েএকটি প্যারেন্ট ক্লাস নিই এবং বাকিী ক্লাস গুলোকে সেখানেে এক্সটেন্ডস করে সেগুলোকেও ব্যবহর করতে করতে পারি।

    class Animal {
        name : string;
        species : string;
        constructor(name : string, species: string) {
            this.name = name
            this.species = species
        }
        makeSound(){
            console.log("I am making Sound")
        }
    }

    class Dog extends Animal {
        constructor(name: string, speces: string){
            super(name, speces)
        }
        makeBaring(){
            console.log("I am a dog and I am barking now")
        }
    }

    class Cat extends Animal {
        constructor(name: string, species: string){
            super(name, species)
        }
        makeMewa(){
            console.log("I am a Cat and I am mawing")
        }
    }

    // এটাকে নিচের মতো করে শর্টে লিখা যায়। 
    // const GetAnimal = (animal : Animal) =>{
    //     if(animal instanceof Dog){
    //         animal.makeBaring()
    //     }else if(animal instanceof Cat){
    //         animal.makeMewa()
    //     }else{
    //         animal.makeSound()
    //     }
    // }

    // Smart way to use function 

    const isDog = (animal : Animal ) : animal is Dog =>{ // এখানে যাতে বুঝে যে এটা কি টাাইপ
        return animal instanceof Dog
    }
    const isCat = (animal : Animal) : animal is Cat=>{  // এখানে যাতে বুঝে যে এটা কি টাাইপ
        return animal instanceof Cat
    }
    const GetAnimal = (animal : Animal) =>{
        if(isDog(animal)){
            animal.makeBaring()
        }else if(isCat(animal)){
            animal.makeMewa()
        }else{
            animal.makeSound()
        }
    }

    const dog = new Dog ("Kutta", "Ghew Ghew")
    const cat = new Cat ("Biral", "Meawing")
    GetAnimal(dog)


    // এখানে যখন GetAnimal() কল করে ডগ কে পাঠাবো তখন সে GetAnimal ফাংশনে প্যারামিটার হিসাবে গ্রহণ করে চেক করবে যে ডগের ভিতর এই এনিমেল আছে কি না থাকলে ডগের ফাংশনটাকে কল করে দেও।
    // সেমভাবে ক্যাটকে কল করলে সে চেক করবে 
}