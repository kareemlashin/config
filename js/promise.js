function sum(a, b) {
    return Promise(function(resolve, reject) {
        setTimeout(() => {
            if (typeof a !== "number" || typeof b !== "number") {
                return reject(new TypeError("Inputs must be numbers"));
            }
            resolve(a + b);
        }, 1000);
    });
}
var myPromise = sum(10, 5);
myPromise.then(function(result) {
    document.write(" 10 + 5: ", result);
    return sum(null, "foo"); // Invalid data and return another promise
}).then(function() { // Won't be called because of the error
}).catch(function(err) { // The catch handler is called instead, after another second
    console.log(err); // => Please provide two numbers to sum.
});

const promise = new Promise((resolve, reject) => {
    // Make a network request
    if (response.status === 200) {
        resolve(response.body)
    } else {
        const error = 'error';
        reject(error)
    }
})

promise.then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
}).finally(() => {
    console.log('finally')

})