const elements = [1,1,2,3,4,5,6];
const othersElements = [4,5,6,5,8,7];

const newArray = [...elements];
for (let index = 0; index < othersElements.length; index++) {
    const element = othersElements[index];
    newArray.push(element);
}
console.log('Con For ' + newArray);

const rta = elements.concat(othersElements);
console.log('Con concat ' +rta);
const rta2 = [...elements,...othersElements];
console.log('Con concat2 ' +rta2);
const rta3 = [...elements,'random'];
console.log('Con concat2 ' +rta3);
const rta4 = [...elements,...'random']; // cuidado cuando se envie un texto.
console.log('Con concat2 ' +rta4);
elements.push(...othersElements);
console.log('Con elements ' +elements);