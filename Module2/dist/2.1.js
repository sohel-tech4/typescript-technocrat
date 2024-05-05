"use strict";
{
    // Type Assertion
    let MyCareer;
    MyCareer = "Web Development";
    MyCareer = 225;
    MyCareer.toFixed;
    const getSum = (value) => {
        if (typeof value === "string") {
            const newValue = parseFloat(value) * 1000;
            return `This new Value of : ${newValue}`;
        }
        else if (typeof value === "number") {
            const newValue = value * 1000;
            console.log(newValue);
        }
    };
    getSum("2000");
}
