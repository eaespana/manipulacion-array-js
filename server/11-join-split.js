const elements = ['Fire', 'Air', 'Water'];

const separator = '--';
let result0 = '';
for (let index = 0; index < elements.length; index++) {
  const element = elements[index];
  result0 += (index == 0 ? '' : separator) + element;
}
console.log('result0', result0);


console.log( elements.join() );
// expected output "Fire,Air,Water"

console.log(elements.join(''));
// expected output "FireAirWater"

console.log(elements.join('-'));
// expected output "Fire-Air-Water"

const title = 'Curso de manipulación de arrays';
const titleSplit = title.split(' ');
console.log(titleSplit);
const titleJoin = titleSplit.join('-');
console.log(titleJoin.toLowerCase());