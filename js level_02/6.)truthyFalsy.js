
//falsy values.
console.log(0, Boolean(0));
console.log(undefined, Boolean(undefined));
console.log(null, Boolean(null));
console.log(NaN, Boolean(NaN));
console.log('', Boolean(''));
console.log(false, Boolean(false));


console.log();

//Truthy Values

//these are explicit conversion.
console.log('Ri', Boolean("Ri"));
console.log(-1, Boolean(-1));
console.log(1, Boolean(1));
console.log({}, Boolean({}));
console.log([], Boolean([]));
console.log(true, Boolean(true));


//Implicit conversion are taken care by jS.

if(0) // as 0 is a falsy value. 
{
    console.log('true');
}
else
{
    console.log('false');
}
