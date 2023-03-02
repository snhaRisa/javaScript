/* 
Check if a string title is a title string or not. A title string is one which has all the words in the string start with a upper case letter.
    checkTitle("A Mind Boggling Achievement") ➞ true
    checkTitle("A Simple Java Script Program!") ➞ true
    checkTitle("Water is transparent") ➞ false
*/

const inputStr = 'A Mind boggling Achievement';
const stringArray = inputStr.split(' ');

function checkTitle(stringArray)
{
    let checkBool = false;
    let count = 0; 
    
    for(count=0; count<stringArray.length; count++)
    {
        if(stringArray[count][0] === stringArray[count][0].toUpperCase())
        {
            checkBool = true; 

        }
        else
        {
            checkBool = false; 
            return checkBool;
        }
    }

    return checkBool; 
}

console.log(checkTitle(stringArray));
