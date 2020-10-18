let errow = () => {
    //the code you want to return;
};
Or
let errow = (x) => {
        console.log(x)
    }
    // ? statement
function PrintName(name) {
    console.log("my name is ", name);
}
// ! expression
// Arrow function es6
const PrintName = (name) => {
    return console.log("my name is ", name);
}

window.age = 10; // <-- notice me?
function Person() {
    this.age = 42; // <-- notice me?
    setTimeout(() => { // <-- Arrow function executing in the "p" (an instance of Person) scope
        console.log("this.age", this.age); // yields "42" because the function executes on the Person scope
    }, 100);
}

var p = new Person();

'use strict';

var obj = { // does not create a new scope
    i: 10,
    b: () => console.log(this.i),
    c: function() {
        console.log(this.i);
        let x = () => {
            console.log(this.i)
        }
        x();
    }
}

obj.b();
obj.c();
const location = {
    country: "Greece",
    city: "Athens"
};
let add = (x, y) => { return x + y; };

function Car() {
    this.speed = 0;

    this.speedUp = function(speed) {
        this.speed = speed;
        let self = this;
        setTimeout(function() {
            console.log(self.speed);
        }, 1000);

    };
}

let car = new Car();
car.speedUp(50); // 50;

var functionObject = {
    name: 'functionObject',
    printName: function printName() {
        console.log(this.name);
        let y = () => {
            console.log(this.name);
        }
        y();
    }
};
let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("done!"), 1000);
});

// resolve runs the first function in .then
promise.then(
    result => alert(result), // shows "done!" after 1 second
    error => alert(error) // doesn't run
);

let x = new Promise((resolve, reject) => {
        setTimeout(() => resolve("result"), 2000)
    })
    .finally(() => alert("Promise ready"))
    .then(result => alert(result)); // <-- .then handles the result

var isMomHappy = false;

// Promise
var willIGetNewPhone = new Promise(
    function(resolve, reject) {
        if (isMomHappy) {
            var phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone); // fulfilled
        } else {
            var reason = new Error('mom is not happy');
            reject(reason); // reject
        }

    }
);
willIGetNewPhone.then(x => {
    console.log(x)
}).catch(err => {
    console.log(err)

})
var promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('hello world');
    }, 2000);
});

promise.then(function(data) {
    console.log(data + ' 1');
});

promise.then(function(data) {
    console.log(data + ' 2');
});

promise.then(function(data) {
    console.log(data + ' 3');
});