// ! javascript object notation
[{
    name: 'user',
    skills: [2, 2, 3, 4],
    address: {
        city: 'banha'
    }

}, ]

myObj = { "name": "Jane", "age": 18, "city": "Chicago" };
myJSON = JSON.stringify(myObj); // storing data
localStorage.setItem("testJSON", myJSON);
text = localStorage.getItem("testJSON"); // retrieving data 
obj = JSON.parse(text);