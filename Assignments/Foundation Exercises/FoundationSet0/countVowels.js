
const string = 'This is an umbrella'; //6
const vowels = 'aeiou';

function countVowels(input)
{
    let count = 0, counts=0; 

    for(count; count<input.length; count++)
    {
        if(vowels.includes(input.charAt(count)))
        {
            counts++;
        }
    }

    return counts;
}

console.log(countVowels(string));