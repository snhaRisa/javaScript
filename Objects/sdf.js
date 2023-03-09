//We are given few characters in array. We need to convert it to an object by also adding character's ASCII as its value. 

const inputArr = ['a', 'b', 'c', '%'];

function transform(input)
{
    //const resultObj = {};
    const resultArr = [];
    let count = 0;
    let value;

    for(count; count<input.length; count++)
    {
        const resultObj = {};
        value = input[count].charCodeAt();
        resultObj[input[count]] = value;
        console.log(resultObj);
        resultArr.push(resultObj);
    }

    return resultArr;
}

console.log(transform(inputArr));


//We are given few characters in array. We need to convert it to an object by also adding character's ASCII as its value. 

// const inputArr = ['a', 'b', 'c'];

// function transform(input)
// {
//     const resultObj = {};
//     let count = 0;
//     let value;

//     for(count; count<input.length; count++)
//     {
//         value = input[count].charCodeAt();
//         resultObj[input[count]] = value;
//     }

//     return resultObj;
// }

// console.log(transform(inputArr));