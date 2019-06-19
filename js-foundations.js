// Javascript Foundations Assessments

// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three" or, print the number and "is not divisble by three".

divThree = (num) => {
    if (num % 3 === 0){
        return `${num} is evenly divisble by three.`
    } else {
        return `${num} is not evenly divisble by three.`
    }
}
console.log(divThree(6));
console.log(divThree(10));

// 2. Write an object called helloMe. Include your first_name, last_name and at least two other properties of you. Write a function that returns a description of you.

const helloMe = {
    first_name: "Jason",
    last_name: "Cheng",
    age: 25,
    status: "hungry",
    getInfo: function(){
        return `${this.first_name} ${this.last_name} is ${this.age} years old and is currently ${this.status}.`
    }
}
console.log(helloMe.getInfo())

// 3. Create an array of 5 grocery items. Write a function that returns the first, middle, and last item as a string.

var groceries = ["milk", "eggs", "chicken", "asparagus", "rice"]

selection = () => {
    return `${groceries[0]}, ${groceries[2]}, and ${groceries[4]}.`
}
console.log(selection())

// 4. Write a function called alphabetSoup that takes an argument of "str" and return a string with the letters in alphabetical order (ie. learn becomes aelnr). Assume numbers and punctuation symbols will not be included in the parameter.

alphabetSoup = (str) => {
    return str.split("").sort().join("")
}
console.log(alphabetSoup("hello"))
console.log(alphabetSoup("defacb"))

// 5. Given the arrays below, write a function animalNums that uses a for loop to print one value from each array concatenated together.
// output should be: "9 ducks", etc

var nums = [9, 5, 88, 2, 5, 42, 57]
var nums2 = [9, 5, 88]

var nouns = ["ducks", "elephants", "pangolin", "rhinoceros", "giraffes", "penguins", "llamas"]
var nouns2 = ["ducks", "elephants", "pangolin"]


animalNums = (array1, array2) => {
    let newArray = []
    for (let i=0; i<array1.length; i++){
       newArray.push(array1[i] + " " + array2[i])
    }
    return newArray
}

console.log(animalNums(nums, nouns))

//6. Create an array of 5 numbers. Write a function that loops through the array and returns a new array of the numbers multiplied by 5.

var numbers = [5, 6, 1, 3, 7]

mult5 = (array) => {
    var newArray = array.map(value => {return value * 5})
    return newArray
}

console.log(mult5(numbers))