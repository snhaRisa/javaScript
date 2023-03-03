

function rangedArray(numberOne, numberTwo)
{
    let count = numberOne;
    const resultArray = [];

    for(count; count<=numberTwo; count++)
    {
        resultArray.push(count);
    }

    return resultArray;
}

console.log(rangedArray(-3, 6));