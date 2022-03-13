//create an array called "cars" with four cars
let cars = ['Ford', 'Toyota', 'Dodge', 'Tesla']
console.log(`The length of the cars array is ${cars.length}`)
console.log(cars[0])

//create another array called `moreCars` with 4 more different types of cars. The last car type should be Honda.
let moreCars = ['Lexus', 'Range Rover', 'Pontiac', 'Honda']

//create an array called totalCars that combines the "cars" array and "moreCars" using the concat method
let totalCars = cars.concat(moreCars)
console.log(`The total cars array is [${totalCars}]`)

//create a variable of index that determines the index of 'Honda" in the totalCars array using the indexOf method
let index = totalCars.indexOf('Honda')
console.log(`The index of 'Honda' in totalCars is ${index}`)

//create a variable of index that determines the last index of 'Ford" in the totalCars array using the lastIndexOf method
let lastIndexOf = totalCars.lastIndexOf('Ford')
console.log(`The last index of 'Ford' in totalCars is ${lastIndexOf}`)

//create a variable of stringOfTotalCars to equal a string of the totalCars by using the join() method
let stringOfTotalCars = totalCars.join(',')
console.log(`The string of the total cars is "${stringOfTotalCars}"`)

//create a variable of carsFromString to convert stringOfTotalCars to an array using the split() method
let carsFromString = stringOfTotalCars.split(`','`)
console.log(`The array of the string of total cars is [${carsFromString}]`)

//create a variable carsInReverse that reverses the order of the totalCars array using the reverse() method
let carsInReverse = totalCars.reverse()
console.log(`The totalCars array in reverse order is [${carsInReverse}]`)

//create variable called sortedCarsInReverse to use the `sort` method to put the array `carsInReverse` into alphabetical order.
let sortedCarsInReverse = carsInReverse.sort()
console.log(`The carsInReverse array sorted by alphbetical order is [${sortedCarsInReverse}] `)
console.log(carsInReverse.indexOf('Dodge'), " is the predicted index of Dodge");

const pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird']
//Create a new array called reptiles that will have the values of 'snake' and 'lizard'
let reptiles = pets.slice(4, 6)
console.log(`The replitiles in the pets array are [${reptiles}]`)
console.log(`The pets array is [${pets}]`)

//Create a new array called `removedReptiles`, using the `splice` method to remove `snake` and `lizard` from the `pets` array.
const removedReptiles = pets.splice(4, 2, 'hamster')
console.log(`The removed reptiles are [${removedReptiles}]`)
console.log(`The pets array is [${pets}]`)

// Use the `pop` method to remove the last item from the `pets` array, saving it to a variable called `removedPet`.
const removedPet = pets.pop()
console.log(`The removed pet are [${removedPet}]`)
console.log(`The pets array is [${pets}]`)

// Use the `push` method to add `removedPet` back to the end of the `pets` array.
let addedPet = pets.push(removedPet)
console.log(`The added pet is [${removedPet}]`)
console.log(`The pets array is [${pets}]`)

//Use the `shift` method to remove and console.log the first item in the `pets` array.
let removedFirstPet = pets.shift()
console.log(`The pets array is [${pets}]`)

// Use the `unshift` method to add the string `'turtle'` as the first item in the `pets` array.
let addededFirstPet = pets.unshift('turtle')
console.log(`The pets array is [${pets}]`)

//.forEach()
const numbers = [23, 45, 0, 2, 8, 44, 100, 1, 3, 91, 34]

//Build a function called `addTwo` that can take in num, index, and arr as parameters—`(num, index, arr)`—and returns `num + 2` at each `index` of the `arr`.

const addTwo = (num, index, arr) => {
    for (let i = 0; i < arr.length; i++) {
        return arr[index] = num + 2
    }
}

//Use `.forEach()` on the `numbers` array, passing in your freshly built function `addTwo` as an argument, in order to add 2 to each number in the array.
numbers.forEach(addTwo)
console.log(`The numbers plus two are ${numbers}`)


