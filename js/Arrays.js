var dogs = new Array("Bulldog", "Beagle", "Labrador"); // declaration


for (var i = 0; i < dogs.length; i++) { // parsing with array.length
    console.log(dogs[i]);
}

dogs.pop(); // remove last element
dogs.push("Chihuahua"); // add new element to the end
dogs.shift(); // remove first element
dogs.unshift("Chihuahua"); // add new element to the beginning
dogs.splice(2, 0, "Pug", "Boxer"); // add elements (where, how many to remove, element list)
var animals = dogs.concat(cats, birds); // join two arrays (dogs followed by cats and birds)
dogs.slice(1, 4); // elements from [1] to [4-1]
dogs.sort(); // sort string alphabetically
dogs.reverse(); // sort string in descending order
dogs.filter(x => x == "Beagle")


var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
dogs.forEach(element => {
    console.log(element)
});

for (const iterator of dogs) {
    console.log(iterator)
}

for (const key in dogs) {
    const element = object[key];
    console.log(element)

}


const a = [1, 2, 3, 5, 8].some(item => item > 5)
const b = [1, 2, 3, 4, 5].some(item => item > 5)

console.log(a)
console.log(b)

const a1 = [10, 9, 8, 7, 6].every(item => item > 5)
const b2 = [7, 6, 5].every(item => item > 5)

console.log(a)
console.log(b)
const numbers = [1, 2, 3, 4, 5]
const doubled = numbers.map(value => value * 2)

console.log(doubled)
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

function isPrime(num) {
    for (let i = 2; num > i; i++) {
        if (num % i == 0) {
            return false
        }
    }
    return num > 1
}

console.log(array.filter(isPrime))

const array = [1, 2, 3, 4, 5]
array.forEach((item) => console.log(item))

const inventory = [
    { name: 'apples', quantity: 2 },
    { name: 'bananas', quantity: 0 },
    { name: 'cherries', quantity: 5 }
]

const result = inventory.find(({ name }) => name === 'cherries')

console.log(result)

const numbers = [4, 2, 5, 1, 3]
numbers.sort((a, b) => a - b)
console.log(numbers)


const letters = ['a', 'b', 'c']
const numbers = [1, 2, 3]

console.log(letters.concat(numbers))

console.log([1, 2, 3].includes(2))
console.log([1, 2, 3].includes(4))

console.log([1, 2, 3].reverse())