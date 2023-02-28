//traversing a array or a string in reverse order simplifies our task. 

const str = 'Shaily';
const num = [10, 20, 30, 40, 50, 60, 70];

let count; 

for(count = str.length-1; count>=0; count--)
{
    console.log(str.charAt(count));
}

console.log(`---------------------------------`);

for(count = num.length-1; count>=0; count--)
{
    console.log(num[count]);
}
