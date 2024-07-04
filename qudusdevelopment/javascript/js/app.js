let fname = 'Qudus'
let country = 'Nigeria'

const gravity  = '98.1'

// accessing characters in js
let string = 'JavaScript'
let firstletter = string[0]
console.log(firstletter)

let secondletter = string[1]
console.log (secondletter)


let lastletter = string[9]

console.log (lastletter)

// primitive data type 

let lighton = 'yes'
let lightoff = 'no'

console.log(lighton==lightoff)

let numOne = '5'
let numTwo = '5'

console.log(numOne==numTwo)

// Non primitive data type (array)

let nums = [1,2,3]
let nuMber = nums

console.log(nums==nuMber)

// string concatenation

let space = ''
let fulltName = 'Qudus'
let lastName = 'Goodman'

let fullname = fulltName + space + lastName;

console.log(fullname)

// bactick

let firstName = 'Qudus'
let age = '30'
let state = 'Lagos'

let personInfoTwo = `I am ${firstName} . I am ${age} . I live in ${state}`

console.log(personInfoTwo)

// Array
const arr = Array()

console.log(arr)

const webTech = ['HTML','CSS','JavaScript']

console.log(webTech)

console.log(webTech.length)


// array different data type

const info = [
    'Qudus',
    30,
    true,
    {country: 'Nigeria'}
]

console.log(info)

// Array index

const learn = ['html','css','js']

console.log(learn.includes('python'))

let firstLearn = learn [0]
let secondLearn = learn[1]

console.log(firstLearn)

console.log(secondLearn)

// let lastIndex = learn.length-1
// lastLearn = learn [lastIndex]

// console.log(lastLearn)

// Modifying array element
const states = [
    'lagos',
    'ogun',
    'oyo',
    'osun',
]
console.log(states)

states[2]= 'ibadan'
console.log(states[2])

let lastIndex = states.length-1
lastStates = 'osogbo' 

console.log(lastStates.includes('eko'))

// LOOP

// while loop
let i = 0
while (i <= 5) {
  console.log(i)
  i++
}

// do while loop
// let l = 0
// do {
//     console.log(l)
//     l++
// }
// while (l <= 5)


    // FUNCTION
    // Function without parameter
    function addTwoNumbers () {
        let numOne = 10
        let numTwo = 20
        let sum = numOne + numTwo

        console.log(sum)
    }

    addTwoNumbers()

     // Function returning value

    function sents (){
        let sentOne = 'Get the  fuck'
        let sentTwo = 'Aint fucking kidding'
        let both = sentOne +  sentTwo
        return both

        }
    console.log(sents())

    // Function with a parameter
        function area (param1) {
            let param1 = ['html','css']

            console.log(area())

        }
        area(param1)


   



 


