const letters = ['a','b','c'];

const newArray = [];
for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    newArray.push(element + '++');
}
console.log('for Original ' + letters);
console.log('for New ' + newArray);

const newArray2 = letters.map(item => item + '--');

console.log('map Original ' + letters);
console.log('map New ' + newArray2);