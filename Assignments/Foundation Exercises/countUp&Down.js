
const numb = 3; 
const result = [];


function countUp(number)
{
    let count = 0;

    for(count; count<=number; count++)
    {
        result.push(count);
    }
    for(count=(number-1); count>=0; count--)
    {
        result.push(count);
    }

    return result;
}

console.log(countUp(numb));