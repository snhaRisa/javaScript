

const inputArr = [10, 20, 30, 40, 50];
let sum = 0; 

function sumArray(input)
{
    let count = 0; 

    for(count; count<input.length; count++)
    {
        sum+= input[count];
    }

    return sum;
}

console.log(sumArray(inputArr));