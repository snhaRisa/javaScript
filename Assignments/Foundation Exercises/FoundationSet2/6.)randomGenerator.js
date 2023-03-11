

const numbers = [10, 5, 2, 12, 53, 23, 66];

function getRandom(input)
{
    let numRandom = Math.floor(Math.random() * input.length); 

    return input[numRandom]; 
}

console.log(getRandom(numbers));
