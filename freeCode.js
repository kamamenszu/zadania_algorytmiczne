// I create var with first name and I can check string length by using .length property and I assigned that to new variable.
var firstName = "Agnieszka";
firstNameLength = firstName.length;
console.log(firstNameLength);

// I can get specific index of character in a string
var lastName = "Wozniakowski";
var firstLetterOfLastName = lastName[0];
var thirdLetterOfLastName = lastName[2];
console.log(firstLetterOfLastName);

// I can get value of specific index in arrays
var myArray = [20, 30, 40];
var myData = myArray[0];
console.log(myData);

// I can change the value in array, using index
var myArray = [20, 30, 40, 50];
myArray[3] = 100; // it equals to [20, 30, 40, 100]  

// I can get last letter from o string
var lastName = "Wozniakowski";
var lastLetterOfLastName = lastName[lastName.length - 1];
console.log(lastLetterOfLastName);

// I can get  the Nth-to-last character in a string
var lastName = "Wozniakowski";
var thirdLetterOfLastName = lastName[lastName.length - 3];
console.log(thirdLetterOfLastName);

// If I want to change particular letter in a string I can change it only by [];
var firstName = "Melinda";
firstName = "Selinda";
console.log(firstName);

// wordbblanks - game where the words are missing
function wordBlank(noun, adjective, verb, adverb) {
    var result = "";
    result += "My " + noun + "is " + adjective + "and " + verb + adverb;
    return result;
};

function wordBlanks(noun, adjective, verb, adverb) {
    var result = "";
    var mySentence = "My " + noun + "is " + adjective + "and " + verb + adverb;
    result.push(mySentence);
    return result;
};
wordBlanks(spider, small, ran, fast);

// the local variables are see only inside the function, we can't log them. If we have the same name for local and global variables, the local takes precendence over the global
var myVar = "milk";
function myTest() {
    var myVar = "bread";
    return myVar;
};

// we can assign returned value of function to variable
var number = 2;
function addFive(num) {
    return num + 5;
};
number = addFive(8);

// write a function that has 2 params: array and number. Add nr to the end of array, then remove the first elem of the array. Function should return the removed element.
function nextInLine(arr, item) {
    arr.push(item);
    removedElement = arr.shift();
    return removedElement;
};
