// example data
const exampleArray = [10, 4, 100, 35, 31, 23, 443, 221, 342, 10, 12, 42];
const shit = ["function", null, function() {}, () => {}, 10, 100, {}];
const exampleArray2 = [
    [10, 4, "100", 35, "31", "23", 443, "221", "342", 10, 12, 42]
]

//object
function Point(x, y) {
    this.x = x;
    this.y = y;
}
//-------------------------------------------------------Soluciones-----------------------------------------------------

// Esta función limpia cualuqier array y deja solo números aunque sea un array dentro de otro (como es el caso de exampleArray2)
const arrayCleaner=(array)=>{
 return oneArr(array).filter(value=> typeof value === 'number'); 
};


//Ejercicio 1: Crea una funcion que encuentre el valor 4 en el array exampleArray.

//Programación funcional
// Función recorre todo el array en busca del número 4. Cuando lo consigue retorna el index en el que se encuentra.
const numFourFinder = (arr) =>{
    let i = 0;
    while (arr[i] !== 4){
        i++
    }
    return i
};
console.log (numFourFinder(exampleArray))

//Programación declarativa
//Usando la función foreach pido que imprima el indice de cualquier valor que sea 4.
// exampleArray.forEach((element, index)=>{
//     if(element === 4){
//         console.log (index);
//     };
// });

//Utilizo la función indexof para ubicar el index del valor 4. 
function declarativeSearch(array, value) {
    return array.indexOf(value)
};
console.log(declarativeSearch(exampleArray, 4))

//Ejercicio 2: Crea una funcion que limpie el array shit usando programación declarativa

//Función filtra los elementos del array de tipo string y luego los retorna dentro del array.
const theStringFilter = (arr) =>{  
    let stringOnly= arr.filter(value=> typeof value === 'string');
    return stringOnly;
};

 console.log(theStringFilter(shit));

 //Ejercicio 3: Crea una función que calcule la distancia entre dos puntos. 

 // Declaro variables que definen X y Y. Función que reciba dos puntos.
 let a = new Point(5, 5);
 let b = new Point(9, 6); 

//Creo una función que mida la distancia entre dos puntos. Retorno un new point para que retorne un nuevo objeto.
 const distanceMeasure = (pointA, pointB) =>{
     return new Point((pointB.x - pointA.x),(pointB.y - pointA.y)); 
 };
console.log (distanceMeasure(a, b));

 //Ejercicio 4: Crear una función que compare los valores de exampleArray2 y exampleArray1 pero que se fije en el tipo. Si el array es más corto debe parar
 // de comparar en el de menor longitud. 
 
 //Creo una función que verifique que los arrays tengan la misma longitud y que mientras esa condición sea cierta, compare sus index y se detenga en lo que sean diferentes.
const arrayCompare=(arr1, arr2)=>{
    let cleanArr2 = oneArr(arr2);
    let stopIndex = 0;
    if(arr1.length === cleanArr2.length){
        let i = 0;
        while(arr1[i] === cleanArr2[i]){
            i++;
            stopIndex = i;    
        }
    }  
    return 'Los arrays son diferentes en el indice '+ stopIndex
}

//Función que recorre arrays anidados y deja un solo array.
const oneArr =(arr) =>{
    for(i in arr){
        for(j in arr[i]){
            let indexJ = arr[j];
            return indexJ;
        };
    };  
};

console.log(arrayCompare(exampleArray,exampleArray2));