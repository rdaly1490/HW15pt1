/**
 *
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

function max(a, b){
    "use strict";
    if (a > b) {
        return a;
    }
    else {
        return b;
    }
}
// console.log(max(2,3));
// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(a,b,c){
    "use strict";
    if (a>b && a>c) {
        return a;
    }
    else if (b>a && b>c) {
        return b;
    }
    else {
        return c;
    }
}
// console.log(maxOfThree(1,2,3));
// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(a){
    "use strict";
    var vowels = ["a","e","i","o","u","y"];
    var match = [];
    for (var i=0; i<vowels.length; i++) {
        if (a === vowels[i]) {
             match.push(vowels[i]);
        }
    }
    if (match.length > 0) {
        return true;
    }
    else {
        return false;
    } 
}
// console.log(isVowel("z"));
// ---------------------
// Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    "use strict";
    // var allowed = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","z"];
    // var vowels = ["a","e","i","o","u","y"];
    // var newPhrase = "";
    // var emptyArr = [];

    
    
    // for (var i=0; i<phrase.length; i++) {
    //     for (var j=0; j<allowed.length; j++) {
    //         if (phrase.charAt(i) === allowed[j]) {
    //             newPhrase = newPhrase + phrase.charAt(i) + "o";
    //             console.log(newPhrase);
    //         }
    //         else {
    //             for (var k=0; k<vowels.length; k++) {
    //                 if (phrase.charAt(i) === vowels[k]) {
    //                     newPhrase = newPhrase + phrase.charAt(i);
    //                 }
    //             }
    //         }

    //     }
    // }
    // return newPhrase;
}
// console.log(rovarspraket("zzez"));

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(array){
    "use strict";
    var total = 0;
    for (var i=0; i<array.length; i++) {
        total = total + array[i];
    }
    return total;
}
// console.log(sum([1,2,3,4]));

function multiply(array){
    "use strict";
    var total = 1;
    for (var i=0; i<array.length; i++) {
        total = total * array[i];
    }
    return total;
}
// console.log(multiply([1,2,3,4]));

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(str){
    "use strict";
    var newArray = [];
    var arr = str.split("");
    var popped ="";
    for (var i = arr.length; i > 0; i--) {
        popped = arr.pop();
        newArray.push(popped);
    }     
return newArray.join("");
}
// console.log(reverse("hello world"));
// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(array){
    "use strict";
    var current = 0;
    var longest;

    for(var i=0; i < array.length; i++){
        if(array[i].length > current){
            current = array[i].length;
            longest = array[i];
        }      
    }
    return longest;
}
// console.log(findLongestWord(["red", "green", "blue"]));
// console.log(findLongestWord(["green", "red", "blue"], 4));
// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(array, num){
    "use strict";
    var longWords = [];
    for (var i=0; i<array.length; i++) {
        if (array[i].length > num) {
            longWords.push(array[i]);
        }
    }
    return longWords;
}
console.log(filterLongWords(["green", "red", "blue"], 4));
// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    "use strict";
    var letterCount = {};

for (var i = 0; i < string.length; i++) {
    var currentLetter = string.charAt(i);
    if (!letterCount.hasOwnProperty(currentLetter)) {

        letterCount[currentLetter] = 1;
    }
    else {
        letterCount[currentLetter]++;
    }

}
var outputString = "";

for (var propertyName in letterCount) {
    var value = letterCount[propertyName];
    console.log(propertyName, letterCount[propertyName]);
    outputString = outputString + propertyName + ":" + value;
}

console.log(letterCount);
return outputString;

}

// console.log(charFreq("catt"));










