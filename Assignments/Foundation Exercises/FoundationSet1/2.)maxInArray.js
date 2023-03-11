

const num = [120, -98, 624, 241, 134, -65];

function maxNumber(input)
{
    let maxNum = input[0];
    let count;
    
    for(count=0; count<input.length; count++)
    {
        if(maxNum < input[count])
        {
            maxNum = input[count];
        }
    }

    return maxNum;
}

console.log(maxNumber(num));
