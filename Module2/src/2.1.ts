{
// Type Assertion
let MyCareer : any;
MyCareer = "Web Development";
MyCareer = 225;
(MyCareer as number).toFixed

const getSum = (value: string | number): string | number | undefined => {
    if(typeof value === "string"){
        const newValue = parseFloat(value) * 1000
        return `This new Value of : ${newValue}`
    }
    else if(typeof value === "number"){
        const newValue = value * 1000
        console.log(newValue)
    }
}

const result = getSum("2000") as string
console.log(result)


}