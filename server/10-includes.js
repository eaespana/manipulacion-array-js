const pets = ['cat','dog','bat'];

let includeInArray = false;
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if(element === 'cat'){
        includeInArray = true;
        break;
    }
}

console.log('Con For ', includeInArray);

const rta = pets.includes('dog');
console.log('Con includes ', rta);