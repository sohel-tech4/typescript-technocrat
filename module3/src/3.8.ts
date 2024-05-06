{
    // Polymorphism
// কোন ক্লাস যখন স্থান কাল পাত্র ভেদে রেজাল্ট চেঞ্জ করে দেয় তখন সেটা হলো পলিমরফিজম।
//
    class Person {
        getSleep(){
            console.log("I am sleeping 8 hours");
        }
    }

    class Student extends Person {
        getSleep(){
            console.log("I am sleeping 7 hours");
        }
    }

    class Developer extends Person {
        getSleep(){
            console.log("I ama sleeping 6 hours");
        }
    }

    const GetSleep = (param : Person) =>{
        param.getSleep()
    }

    const Person1 = new Person
    const Student1 = new Student
    const Developer1 = new Developer

    GetSleep(Person1)
    GetSleep(Student1)
    GetSleep(Developer1)

    // এই যে একই ফাংশন কে কল করার পর ভিন্ন ভিন্ন রেজাল্ট আসতেছে সেটা হলো Polymorphism



    // 

    class Shape {
        getArea() : number{
            return 0
        }
    }

    class Circle extends Shape {
        radious : number
        constructor(radious : number){
            super()
            this.radious = radious
        }
        getArea() : number{
            return  Math.PI * this.radious * this.radious
        }
    }
    class Square extends Shape {
        height : number;
        width : number
        constructor(height : number, width: number){
            super()
            this.height = height;
            this.width = width
        }
        getArea() : number{
            return  this.height * this.width
        }
    }

    const getShapeResult = (param : Shape) =>{
        console.log(param.getArea())
    }

    const doShape = new Shape
    const doCircle = new Circle(10)
    const doSquare = new Square(10, 10)

    getShapeResult(doCircle)

}
