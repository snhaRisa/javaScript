/*
A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.
Create a function that takes in an array of names and returns the name of the secret society.
    Examples
    societyName(["Adam", "Sarah", "Malcolm"]) ➞ "AMS"
    societyName(["Harry", "Newt", "Luna", "Cho"]) ➞ "CHLN"
    societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]) ➞ "CJMPRR"
*/

const inputArray = ["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"];
let resultString = '';
let processArray = [];

function societyName(input)
{
    let count = 0; 

    for(count; count<input.length; count++)
    {
        processArray.push(input[count][0]);
    }

    processArray.sort();
    resultString = processArray.join('');
    console.log(resultString);
    return resultString;
}

console.log(societyName(inputArray));
