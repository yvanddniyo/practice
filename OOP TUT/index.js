/**THIS IS THE FUNCTIONAL PROGRAMMING LANGUAGE */

let baseSalary = 3000;
let overTime = 10;
let rate = 20;

const getWage = (baseSalary, overTime, rate) => {
    return baseSalary + (overTime * rate);
}

/**THIS IS THE OOP PROGRAMMING LANGUAGE */

const employee = {
    baseSalary: 3000,
    overTime: 10,
    rate: 20,

    getWage: () => {
        return this.baseSalary + (this.overTime * this.rate)
    }
}

employee.getWage()

/** Here is the OOP code  */
// when the object has the  more than two method it's called heavier.
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 2
    },
    draw: () => {
        console.log("This is a oop")
    }
}

/** Factory Function */

const createCircle = (radius) => {
    return {
        radius,
        draw: () => {
            console.log("this is circle");
        }
    }
}

const circleNum = createCircle(3)

/** Constructor Function */

function Circle(radius) {
    console.log("this :", this)
    this.radius = radius;
    this.draw = () => {
        console.log("this is me");
    }
}

const another = new Circle(1)