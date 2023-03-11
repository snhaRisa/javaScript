//Could have used slice method. It would have been easier. 

const numbers = [10, 20, 30, 40, 50];
const lastLength = 3;

function last(input, last)
{
    let count; 
    const resultArr = [];

    last = last==undefined? 1:last;

    for(count = (input.length-1); count>=(input.length-last); count--)
    {
        if(count<0)
        {
            break;
        }
        resultArr.push(input[count]);
    }

    return resultArr;
}

console.log(last(numbers, lastLength));
