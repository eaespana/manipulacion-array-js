const numbers = [1,30,39,29,10,13];

let rta = undefined;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if(element == 30){
        rta = element;
        break;
    }
}
console.log('Con For', rta);

const rta2 = numbers.find(item => item == 30)
console.log('Con Every', rta2);

const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
];

const rta3 = products.find(item => item.id == '🌭')
console.log('Con Every product', rta3);
const rta4 = products.findIndex(item => item.id == '🌭')
console.log('Con Every product', rta4); 