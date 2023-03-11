// Take a string as input. Return another string of double characters. e.g. Hello ==> HHeelllloo;

const inputString = 'Hello World';

function repeatLetter(inputString)
{
    let resultString = '', count;
    for(count in inputString)
    {
        resultString = resultString + inputString[count] + inputString[count];
    }

    console.log(resultString); 
}

repeatLetter(inputString);
