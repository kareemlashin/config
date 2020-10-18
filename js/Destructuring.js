const objA = {
    prop1: 'foo',
    prop2: {
        prop2a: 'bar',
        prop2b: 'baz',
    },
};

// Deconstruct nested props
const { prop1, prop2: { prop2a, prop2b } } = objA;

console.log(prop1); // 'foo'
console.log(prop2a); // 'bar'
console.log(prop2b); // 'baz'

//simple example with object------------------------------
let obj = { name: 'Max', age: 22, address: 'Delhi' };
const { name, age } = obj;

console.log(name);
//expected output: "Max"

console.log(age);
//expected output: 22

console.log(address);
//expected output: Uncaught ReferenceError: address is not defined

// simple example with array-------------------------------
let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: Array [30,40,50]
const avengers = {
    operation: 'Assemble',
    members: [
        { ironMan: 'Tony Stark' },
        { captainAmerica: 'Steve Rogers' },
        { blackWidow: 'Natasha Romanoff' }
    ]
};

const { operation, members: [{ ironMan }, { captainAmerica }, { blackWidow }] } = avengers;
const avengers = {
    operation: 'Assemble',
    members: [
        { ironMan: 'Tony Stark' },
        { captainAmerica: 'Steve Rogers' },
        { blackWidow: 'Natasha Romanoff' }
    ]
};

const { operation, members: [ironMan, cap, blackWidow] } = avengers;
let myArray = [1, 2, 3];
let [first, second, third] = myArray;
const foobar = {
    foo: "hello",
    bar: "world"
};

const { foo, bar } = foobar;