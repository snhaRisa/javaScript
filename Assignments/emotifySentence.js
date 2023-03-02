/*
Create a function that changes specific words into emoticons. Given a sentence as a string, replace the words smile, grin, sad and mad with their corresponding emoticons.

    Word	Emoticon
    smile	  :D
    grin	  :)
    sad	      :(
    mad	      :P

    Examples

    emotify("Make me smile") ➞ "Make me :D"
    emotify("Make me grin") ➞ "Make me :)"
    emotify("Make me sad") ➞ "Make me :("

    Notes
    The sentence always starts with "Make me".
    Try to solve this without using conditional statements like if/else or switch.


    LOT OF THINKING, Ordered Array and Replace. 
    TOUGH BUT BRILLIANT!!
*/

const emotions = ['smile', 'grin', 'sad', 'mad'];
const emoticons = [':D', ':)', ':(', ':P'];

let resultString = '';

function emotify(inputString)
{
    let count = 0; 
    const inputArr = inputString.split(" ");
    console.log(inputArr);

    const index = emotions.indexOf(inputArr[2]);
    inputArr.pop()
    inputArr.push(emoticons[index]);

    resultString = inputArr.join(' ');

    return resultString;
}

console.log(emotify(inputString));
