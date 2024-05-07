{
    // 
    // Abstraction
    // 1. Interface 2. Abstract 
    // 1. Interface Class

    interface Vehicle {
        startEngine(): void;
        stopEngine():void;
        Move():void
    }

    class Car implements Vehicle {
        startEngine(): void {
            console.log("Starting Engine")
        };
        stopEngine(): void {
            console.log("Stoping Engine")
        }
        Move(): void {
            console.log("Moving Car");
        };
        test():void {
            console.log("I am testing")
        }
        // যেহেতু এটি Vehicle িইন্টারফেসে নাই বাট আরও চাইলে এক্সট্রা ফাংশন বা ভ্যরিয়েবল এড করতে পারি। 

    }

    const ToyotaCar = new Car()
    // ToyotaCar.Move()
    // ToyotaCar.startEngine()
    // ToyotaCar.stopEngine()




    // Abstract Class
    abstract class Car2 {
        abstract startEngine(): void;
        abstract stopEngine(): void;
        abstract Move(): void;
        test():void {
            console.log("I am testing")
        }
    }

    // এখানে যখন class এর পূর্বে abstract ব্যবহার করা হয়েছে তখন সেটা abstract হয়ে গেছে তাই এটিকে ইমপ্লিমেন্ট করার জন্য অবশ্যই অন্য একটি ক্লাস নিতে হবে। 
    // এখানে ফাংশন গুলোও abstract করা তাই এখানে বলা যাবে না বা ইম্প্লিমেন্ট করা যাবে না। অর্থাৎ এটি শুধু ধারনা দিচ্ছে এটি একটি ফাংশন যা এমন হতে পারে। বাদ বাকি এটি ইমপ্লিমেন্ট করার জন্য অবশ্যই অন্য একটি ক্লাস নিয়ে সেখানে বলে দিতে হবে বা ইমপ্লিমেন্ট করে দিতে হবে। 
    
    class Car3 extends Car2 {
        startEngine(): void {
            console.log("I am starting Engine");
        }
        stopEngine(): void {
            console.log("I am stopping Enginee");
        }
        Move(): void {
            console.log("I am moving the car");
        }
    }

    const HondaCar = new Car3()
    HondaCar.test()

}