
# Platzi - Curso de Manipulación de Arrays en JavaScript

Durante tu carrera como programador, tendrás que usar arrays para crear estructuras de datos que te permitan resolver de una manera más rápida y eficiente los algoritmos que desees. En este curso conocerás los arrays en JavaScript, desde como crearlos hasta los distintos métodos que tiene. ¡Aprende junto a tu profesor Nicolas Molina!

Optimiza tu trabajo con estructuras de datos
Aprende y aplica los principales métodos de los arrays
Descubre los fundamentos del manejo de arrays en JavaScript

# Mutable o Inmutable

### Introducción antes de hablar de mutabilidad

En JS los datos asignados a una variable pueden ser de dos tipos:

**Primitive type** (undefined, null, boolean, number, string, symbol), **Reference type** (objects, arrays , functions).

Una de las diferencia entre estas dos, está en la forma como se almacenan estos datos en memoria,

### Mutabilidad e Inmutabilidad

**Mutable:** es algo que se puede cambiar o agregar.

**Inmutable:** es algo que no puede cambiar ni agregar.

Los valores primitivos en js son algo agregado donde solo se pueden reasignar y por lo tanto, todos estos valores son **inmutables**.

Ejemplo
* https://github.com/eaespana/manipulacion-array-js/blob/main/server/16-mutable.js

# ForEach

ForEach es un método para recorrer los elementos de un array

Ejemplo 
*  https://github.com/eaespana/manipulacion-array-js/blob/main/server/01-for-each.js

# map

El método **`map()`** crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

`.map()` es **INMUTABLE** por lo tanto no modifica el `array` original, sino que crea uno nuevo con la “transformación” aplicada. Además, mantienes el mismo `length` que el array original, te devuelve en el nuevo array la misma cantidad que el array que le aplicaste el método.

Ejemplo 
* https://github.com/eaespana/manipulacion-array-js/blob/main/server/02-map.js
* https://github.com/eaespana/manipulacion-array-js/blob/main/server/03-map-reloaded.js

# Filter

Lo que hace es filtrar el array original en base a una condición, los que la cumplan estaran en el nuevo array creado.
Por lo tanto filter() es inmutable y el nuevo array creado solamente puede contener:

* Cero coincidencias
* Todas coincidencias
* Algunas coincidencias
* Pero nunca más coincidencias que el tamaño del array original.

Ejemplo
* https://github.com/eaespana/manipulacion-array-js/blob/main/server/04-filter.js

# Reduce

Este método REDUCE, efectivamente hace eso. Solo reduce a un solo valor y no devuelve otro array, simplemente un valor.
Se utiliza muchísimo para hacer cálculos a partir de la información de un array.

Ejemplo
* https://github.com/eaespana/manipulacion-array-js/blob/main/server/05-reduce.js

# Some

Este método nos devuelve true o false sí al menos 1 elemento de nuestro array cumple con la condición.

Ejemplo
* https://github.com/eaespana/manipulacion-array-js/blob/main/server/07-some.js

# Every

Este método es el contrario a some(), devuelve true o false sí TODOS los elementos del array cumplen la condición.

Ejemplo
* https://github.com/eaespana/manipulacion-array-js/blob/main/server/08-every.js

# Find

El método find() devuelve el primer elemento del array que cumpla con la condición dada o no devuelve undefined si es que no encuentra ningún elemento que cumpla los requisitos pedidos.

Ejemplo
* https://github.com/eaespana/manipulacion-array-js/blob/main/server/9-find.js

# Includes

El método includes() determina si una array incluye un determinado elemento, devuelve true o false según corresponda.

Ejemplo
* https://github.com/eaespana/manipulacion-array-js/blob/main/server/10-includes.js

# Join split

El método join() une todos los elementos de un array en una cadena y devuelve esta cadena. Podemos pasarle cualquier elemento como separador que deseemos.

Ejemplo
* https://github.com/eaespana/manipulacion-array-js/blob/main/server/11-join-split.js

# Concat

Fusionar 2 arrays en uno, se genera un nuevo array sin modificar los array que se fusionan

Ejemplo
* https://github.com/eaespana/manipulacion-array-js/blob/main/server/12-concat.js

# Flat 

Crea una nueva matriz con todos los elementos de sub-array concatenados recursivamente hasta la profundidad especificada.

Ejemplo
* https://github.com/eaespana/manipulacion-array-js/blob/main/server/14-flat.js
* https://github.com/eaespana/manipulacion-array-js/blob/main/server/15-flatmap.js

# Sort =>

Metodo que mutable, sirve para ordenar dentro del array.

Ejemplo
* https://github.com/eaespana/manipulacion-array-js/blob/main/server/17-sort.js

# Curso de Platzi: https://platzi.com/cursos/arrays/
