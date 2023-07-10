// Exercise 1:

const destructureExample = (obj, array) => {

    const { name, age } = obj;
    const [value1, , value2] = array;

    return {
        name,
        age,
    }


}

const obj = { name: 'John', age: 30, city: 'New York' };
const arr = [10, 20, 30, 40];


// console.log(destructureExample(obj, arr))


// Exercise 2:

const sumNumbers = (...numbers) => numbers.reduce((total, current) => total + current, 0)

// console.log(sumNumbers(1, 2,3,4,5))


// Exercise 3:

const createGreeting = (name) => `Hello, ${name}! Welcome to our website.`

// console.log(createGreeting("Bhubon"))


// Exercise 4: 

const isEven = (number) => number % 2 === 0 ? 'Even' : 'Odd'

// console.log(isEven(8))


// Exercise 5: 

const multiply = (a, b) => a * b;

// console.log(multiply(2,3))


// Excercise 6:

const getLargestNumber = (number1, number2) => number1 > number2 ? number1 : number2

// console.log(getLargestNumber(10, 18))


// Excercise 7:

const getAddressCity = (address) => {
    return address.city ? address.city : 'Unknown'
}

const address = { street: '123 Main St', country: 'USA' };

// console.log(getAddressCity(address))


// Excercise 8:

const doubleNumbers = (arr) => arr.map((a) => a * 2)

// console.log(doubleNumbers([1, 2, 3, 4, 5]))


// Exercise 9: 

const filterEvenNumbers = (arr) => {

    const newArr = arr.filter(number => number % 2 === 0 ? number : '')
    return newArr
}

// console.log(filterEvenNumbers([1, 2, 3, 4, 5]))

// Exercise 10: 

const sumArray = (arr) => arr.reduce((a, b) => a + b)

// console.log(sumArray([1, 2, 3, 4, 5, 6]))

// Exercise 11:

const sortNumbers = (arr) => {
    const newArr = arr.sort();
    return newArr;
}

// console.log(sortNumbers([5, 2, 8, 1, 4]))