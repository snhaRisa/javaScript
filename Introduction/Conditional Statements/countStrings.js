//Create a function which takes two arguments as strings. The first argument is to checked whether it contains the character of the second string. The function returns a integer. 

const string1 = 'Rishav'; 
const string2 = 'a';
let count = 0, occurrence=0; 

for(count=0; count<string1.length; count++)
{
    if(string1[count].includes(string2) == true)
    {
        occurrence++;
    }
}

console.log(`The number of occurrence of the character is ${occurrence} times`);