//Create a function where we have 2 arguments. The first consisting of array of arrays & the second argument having one char. We need to look into the first to find total number of char representation. Returns the number of times the character is returned. 

const inputArray = [
    ["D", "E", "Y", "H", "A", "D"],
    ["C", "B", "Z", "Y", "J", "K"],
    ["D", "B", "C", "A", "M", "N"],
    ["F", "G", "G", "R", "S", "R"],
    ["V", "X", "H", "A", "S", "S"]];
const char = 'D';

function letterCounter(inputArray, char)
{
    let outCount=0, inCount=0, occurrence=0;

    for(outCount=0; outCount<inputArray.length; outCount++)
    {
        for(inCount=0; inCount<inputArray[outCount].length; inCount++)
        {
            if(inputArray[outCount][inCount] === char)
            {
                occurrence++;
            }
        }
    }
    
    return occurrence;
}

console.log(letterCounter(inputArray, char));
