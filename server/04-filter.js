const  words = ['spray','limit','elite','exuberant'];

const newArray = [];
for (let index = 0; index < words.length; index++) {
    const item = words[index];
    if(item.length >= 6){
        newArray.push(item);
    }
}
console.log('for Original '+ words)
console.log('for New '+ newArray)

const newArray2 = words.filter(item => item.length >= 6)
console.log('filter Original '+ words)
console.log('filter New '+ newArray2)

const orders = [
    {
      customerName: "Alejo",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
];
console.log("original", orders);
const rta = orders.filter((item) => item.delivered && item.total >= 100);
console.log("rta", rta);

const search = (query) => {
    return orders.filter(item => {
        return item.customerName.toLowerCase().includes(query);
    })
}
  
console.log("search", search("ale"));