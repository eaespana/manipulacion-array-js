const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts = [];

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

const productIndex = products.findIndex(item => item.id === '🍔');
if(productIndex){
    myProducts.push(products[productIndex]);
    products.splice(productIndex,1);
}

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));




/**
 * Reto 1
 * Eliminar un elemento sin borrarlo del la lista original.
 * Solución: usar filter:
*/
const products3 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const products4 = products3.filter(p => p.id != '🍕');
console.log("products3", products3);
console.log("products4", products4);

/**
 * Reto 2
 * Modificar una nueva lista sin modificar la original.
 * Solución: copiar solo los elementos para que no tengan la misma 
 * dirección de memoria.
*/
const productsV2 = [
    {title: "Pizza", price: 121, id: "🍕"},  
    { name: "Burger", price: 121, id: '🍔' },
    { name: "Hot cakes", price: 121, id: '🥞' },
];

const update = {
    id: "🥞",
    changes: {
        price: 200,
        description: "delicious",
    },
}

const productIndexV2 = productsV2.findIndex(item => item.id === update.id);

const updatedProductsV2 = productsV2
        .filter(item => item.id !== update.id)
        .concat({...productsV2[productIndexV2], ...update.changes});
console.log("OriginalList:",productsV2);
console.log("UpdatedList:",updatedProductsV2);
