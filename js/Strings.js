var abc = "abcdefghijklmnopqrstuvwxyz";
var esc = 'I don\'t \n know'; // \n new line
var len = abc.length; // string length
abc.indexOf("lmno"); // find substring, -1 if doesn't contain 
abc.lastIndexOf("lmno"); // last occurance
abc.slice(3, 6); // cuts out "def", negative values count from behind
abc.replace("abc", "123"); // find and replace, takes regular expressions
abc.toUpperCase(); // convert to upper case
abc.toLowerCase(); // convert to lower ca