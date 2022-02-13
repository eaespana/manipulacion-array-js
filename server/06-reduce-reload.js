const items = [1,3,2,3];

const rta = items.reduce((obj,item) => {
    if(!obj[item]){
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
},{});
console.log(rta);

// como funciona el reduce Prueba de Escritorio.
/*
const totals = [1,2,3,4]; =>

||  iteraction  ||  Sum               ||  Item    ||  Return            ||
||  1           ||  {}                ||  1       ||  {1:1}             ||
||  2           ||  {1:1}             ||  3       ||  {1:1,{3:1}        ||
||  3           ||  {1:1,{3:1}        ||  2       ||  {1:1,{3:1},{2:1}  ||
||  4           ||  {1:1,{3:1},{2:1}  ||  3       ||  {1:1,{3:2},{2:1}  ||
*/


const data = [
    {
      name: "Alejo",
      level: "low",
    },
    {
      name: "Andrea",
      level: "medium",
    },
    {
      name: "Zulema",
      level: "hight",
    },
    {
      name: "Santiago",
      level: "low",
    },
    {
      name: "Valentina",
      level: "medium",
    },
    {
      name: "Lucia",
      level: "hight",
    },
  ];

const rt1 = data
    .map(item => item.level)
    .reduce((obj,item) => {
        if(!obj[item]){
            obj[item] = 1;
        } else {
            obj[item] = obj[item] + 1;
        }
        return obj;
    },{});
console.log(rt1);