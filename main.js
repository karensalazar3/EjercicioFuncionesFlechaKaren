//1.Funciones flecha

//Convierte la siguiente función en una función flecha:
function saludar() {
    return "Hola";
}
const saludarFlecha = () => "Hola"

//Convierte la siguiente función en una función flecha en línea:
function division(a, b) {
    return a / b;
}
const divisionFlecha = (a, b) => a / b

//Convierte la siguiente función en una función flecha:
function miNombre(nombre) {
    return `Mi nombre es ${nombre}`;
}
const miNombreFlecha = (nombre) => `Mi nombre es ${nombre}`

//Convierte las siguientes funciones en funciones flecha:
function test2() {
    console.log("Función test 2 ejecutada.");
}
const test2Flecha = () => console.log("Función test 2 ejecutada.");

function test1(callback) {
    callback();
}
const test1Flecha = (callback) => callback();



//2. Foreach

let gente = [
    {
        nombre: "Jamiro",
        edad: 45,
    },
    {
        nombre: "Juan",
        edad: 35,
    },
    {
        nombre: "Paco",
        edad: 34,
    },
    {
        nombre: "Pepe",
        edad: 14,
    },
    {
        nombre: "Pilar",
        edad: 24,
    },
    {
        nombre: "Laura",
        edad: 24,
    },
    {
        nombre: "Jenny",
        edad: 10,
    },
];

//Crea un array con la gente mayor de 25 años y muéstralo por consola
let mayoresDe25 = []
gente.forEach(persona => {
    if (persona.edad > 25) {
        mayoresDe25.push(persona)
    }
})
console.log(mayoresDe25);

//Crea un array con la gente que empieza por J.
let nombreEmpiezaConJ = []
gente.forEach(persona => {
    if (persona.nombre.startsWith("J")) {
        nombreEmpiezaConJ.push(persona)
    }
})
console.log(nombreEmpiezaConJ);



//3.Map

//Dado el siguiente array, crear otro que sea el resultado de elevar cada número a si mismo:
const numbers = [4, 5, 6, 7, 8, 9, 10];
const numerosElevadosAsiMismo = numbers.map(n => n ** n)
console.log(numerosElevadosAsiMismo)



//4.Filter

//Crea un segundo array que devuelva los impares
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const impares = numeros.filter(n => n % 2 !== 0)
console.log(impares)

//Dado el siguiente array, genera un segundo array que filtre los platos veganos
// y saque una sentencia como la del ejemplo:
const foodList = [
    { name: 'Tempeh', isVeggie: true },
    { name: 'Cheesbacon burguer', isVeggie: false },
    { name: 'Tofu burguer', isVeggie: true },
    { name: 'Entrecot', isVeggie: false }
];
const arrqy = foodList
    .filter(e => e.isVeggie)
    .map(e => `Que rico ${e.name} me voy a comer!`)
console.log(arrqy)


//5.Reduce
const numerosEjercicio5 = [39, 2, 4, 25, 62];
const respuestaEjercicio5 = numerosEjercicio5.reduce((acc, curr) => acc * curr)
console.log(respuestaEjercicio5);


//Extras

//Dado el siguiente array, crear un segundo array que forme frases como en
// el ejemplo accediendo a las propiedades del objeto proporcionado:
const staff = [
    {
        name: "Pepe",
        role: "The Boss",
        hobbies: ["leer", "ver pelis"],
    },
    {
        name: "Ana",
        role: "becaria",
        hobbies: ["nadar", "bailar"],
    },
    {
        name: "Luis",
        role: "programador",
        hobbies: ["dormir", "comprar"],
    },
    {
        name: "Carlos",
        role: "secretario",
        hobbies: ["futbol", "queso"],
    },
];
const staffMap = staff.map(e => {
    const allHobbies = e.hobbies.reduce((acc, curr) => `${acc} y ${curr}`)
    return `${e.name} es ${e.role} y le gusta ${allHobbies}`
})
console.log(staffMap);

//Dado el siguiente array, generar un segundo array que
//consiga generar de salida el resultado esperado:
const foodListExtras = ["Pizza", "Ramen", "Paella", "Entrecot"];
const foodListExtrasMap = foodListExtras.map(e => {
    if (e === "Pizza") return "Como soy de Italia, amo comer Pizza";
    if (e === "Ramen") return "Como soy de Japón, amo comer Ramen";
    if (e === "Paella") return "Como soy de Valencia, amo comer Paella";
    if (e === "Entrecot") return "Aunque no como carne, el Entrecot es sabroso";
})
console.log(foodListExtrasMap);

//Dado el siguiente array, devolver un array con los nombres
//de los elementos que valgan más de 300 euros
const inventory = [
    {
        name: 'Mobile phone',
        price: 199
    },
    {
        name: 'TV Samsung',
        price: 459
    },
    {
        name: 'Viaje a cancún',
        price: 600
    },
    {
        name: 'Mascarilla',
        price: 1
    }
];
const nombres = inventory
    .filter(e => e.price > 300)
    .map(e => e.name);
console.log(nombres);


//Concatena todos los elementos del array con reduce para que devuelva una sola frase
const sentenceElements = [
    'Me',
    'llamo',
    'Karen',
    'y',
    'quiero',
    'sentir',
    'la',
    'fuerza',
    'con',
    'javascript'
];
const frase = sentenceElements.reduce((acc, curr) => `${acc} ${curr}`);
console.log(frase);
