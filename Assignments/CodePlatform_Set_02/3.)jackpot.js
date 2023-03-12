/* 
Create a function that takes in an array (slot machine outcome) and returns true if all elements in the array are identical, and false otherwise. The array will contain 4 elements.
Examples
    testJackpot(["@", "@", "@", "@"]) ➞ true
    testJackpot(["abc", "abc", "abc", "abc"]) ➞ true
    testJackpot(["SS", "SS", "SS", "SS"]) ➞ true
    testJackpot(["&&", "&", "&&&", "&&&&"]) ➞ false
    testJackpot(["SS", "SS", "SS", "Ss"]) ➞ false
*/

const jacks = ['#', '#', '#', '#', '&'];

function testJackpot(inputArray)
{
    const char = inputArray[0];
    let count = 0;

    for(count=0; count<inputArray.length; count++)
    {
        if(inputArray[count] == char)
        {
            continue; 
        }
        else
        {
            return false; 
        }
    }

    return true; 
}

console.log(testJackpot(jacks));
