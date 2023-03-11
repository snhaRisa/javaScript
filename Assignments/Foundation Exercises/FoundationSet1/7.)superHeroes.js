
const superHeroes = [
    {
        "name": "Molecule Man",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": [
            "Radiation resistance",
            "Turning tiny",
            "Radiation blast"
        ]
    },
    {
        "name": "Madame Uppercut",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [
            "Million tonne punch",
            "Damage resistance",
            "Superhuman reflexes"
        ]
    }
]

const superHero = "Madame Uppercut";

function thePower(input, checkVar)
{
    let resultString = '';
    
    for(let count=0; count<input.length; count++)
    {
        if(input[count].name == checkVar)
        {
            resultString = `${resultString + input[count].powers}`; 
        }
    }

    return resultString; 
}

console.log(thePower(superHeroes, superHero));
