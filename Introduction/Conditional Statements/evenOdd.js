//Create a function where we input an array. The function returns an array of array which consists of one array of even numbers & the other of odds. 

const inputArray = [1,2,3,4,5,6,7,8,9,10];
const even = [], odd = [];
let count = 0;

function evenOdd(arr)
{
    for(count = 0; count<inputArray.length; count++)
    {
        if(inputArray[count] % 2 != 0)
        {
            odd.push(inputArray[count]);
        }
        else
        {
            even.push(inputArray[count]);
        }
    }

    return[even, odd];
}

console.log(evenOdd(inputArray));

