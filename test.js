// Fixed values are literals values examples like 
// 
// variables is something that we use to store something like var , let , const 

// console.log("2 plus 2 is equal 4 " + 2 + 2)

// console.log(12 + 3 + " is equal fifteen")


// function myFunction(a, b) {
//     return a + b
// }
// myFunction(3, 4);




//    ARRAY METHODS 
const pets = ['cat', 'dog', 'hen', 'duck']
// pop মেথড এরে এর শেষ ইলিমেন্ট কে বের করে দেয় 
// pets.pop()
// push () method insert an elemnt by the last in an array 
// pets.push('monkey')
// shift ( method removes element by first from an array )
// pets.shift()
// unshift medod add elements by first in a array 
// pets.unshift('rat', 'human')
/*splice method can add one or mire elements anywhere in the array ,
it has two digit of number to work with and any string or value you wantto add . 
first digit for which index it should statr and second one for from there how many elements it should delete */
/*by splice method you can simply delete as many as you want just do not 
add any value just add index number as your wish */
// pets.splice(1, 2, 'ant', 'peigon')
// By splice method we can store the deletinfg data like the below code 

// let noPetInBd = pets.splice(0, 2)
// console.log(noPetInBd)
// let str = "Please locate where 'locate' occurs!";
// let whereIndex = str.indexOf("where");
// console.log(whereIndex)

// let x = NaN;
// console.log(typeof x)

// let stupidString = 'a' + 'b' + + 'b' + 'b';
// console.log(stupidString.toUpperCase())

// let first = "100";
// let second = "9";
// console.log(first / second)

// let x = "my name is chikki";
// for (i = 0; i < x.length; i++) {
//     x = "my name is chacha";
// }
// console.log(x);

// const students = ["Zainul", "Farida", "Al Amin", "Enam", "Mishal"]
// students.sort()
// console.log(students)

// const rollNumber = ['3', '4', '5', '7', '1', '9', '10', '20', '18', '15']

// const accendingNumber = rollNumber.sort(chotoThekeBoro)

// function chotoThekeBoro(a, b) {
//     return a - b;
// }

// console.log(accendingNumber)

// function isLeapYear(year) {
//     if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
//         console.log(`${year} is leap year`)
//     }
//     else {
//         console.log(`${year} is not a leap year`)
//     }
// }

// isLeapYear(2017);

// HOW MANY VOWELS ARE THERE 
// const vowels = ['a', 'e', 'i', 'o', 'u']

// function countVowels(sentence) {
//     let count = 0;
//     const individualValue = Array.from(sentence.toLowerCase())

//     individualValue.forEach(function (value) {
//         if (vowels.includes(value)) {
//             count++
//         }
//     })
//     return count;
// }

// console.log(countVowels("MY NAME IS AL AMIN KHAN"))


// FINDING OUT duplicate NUMBER 
// const numbers = [1, 2, 5, 6, 3, 6, 4, 6, 5, 4, 4, 8, 9, 5, 4, 3, 6, 5];

// const duplicateCounting = numbers.filter(findingDuplicate)

// function findingDuplicate(value) {
//     return value === 5;
// }

// console.log(duplicateCounting)
// function isArray(myArray) {
//     console.log(myArray.constructor.toString().indexOf('Array') > -1)
// }

// isArray(['2', '3', '4'])

// console.log(typeof (typeof))

// let myText = "I have to be more 16620"

// let countingO = myText.match(/[6]/ig)
// console.log(countingO)
// console.log(isNaN('35'))
// let myValue = 5;
// if (0 < 5) {
//     myValue = 10
// }
// console.log(myValue)

const names = ["al amin", " enam", "Mishal"]

const abbu = names.push("Zainul")
console.dir(abbu);