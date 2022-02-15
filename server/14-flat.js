const matriz = [
    [1,2,3], // 0
    [4,5,6],
    [7,8,9]
];

const newArray = []
for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < array.length; j++) {
        const element = matriz[i][j];
        newArray.push(element)
    }
}
console.log('Con For ', newArray);

const rta = matriz.flat(3);
console.log('Con Flat ', rta);

const matriz2 = [
    [1,2,3],
    [4,5,6, [1,2, [1,2]]],
    [7,8,9]
];

function profundidad(list) {
    let newList = [];
    if (typeof list != "object") return [list];
    list.forEach(element => {
        newList = newList.concat(profundidad(element));
    });
    return newList;
}

const newArray2 = profundidad(matriz2);

console.log(newArray2);
