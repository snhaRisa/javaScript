

const inputArr = [13, 21, 23, 46, 57, 64, 37, 18, 09, 10];
const displayNum = 3, resultArr=[]; 

function firstDisplays(inputA, numInput)
{
    let count = 0;

    for(count; count<numInput; count++)
    {
        resultArr.push(inputArr[count]);
    }

    return resultArr;
}

console.log(firstDisplays(inputArr, displayNum));
