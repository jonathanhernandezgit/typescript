console.log("hola mundo");

function add(a:number, b:number) 
{
    return a + b;
}

const sum = add (2,3);

//Boolean 

let muted: boolean = true;

muted = false;

//Números

let numerador: number = 42;
let denominador: number = 6;
let resultado = numerador / denominador;

//String

let nombre: string = 'Jonathan';
let saludo = `Me llamo ${nombre}`;

//Arreglos

let people: string[] = [];

people = ["Isabel", "Nicole", "Raul"];

//people.push("9000");

let peopleAndNumbers: Array< string | number > = []

peopleAndNumbers.push("Jonathan");

peopleAndNumbers.push(1234);

//Enum

enum Color {
    Rojo = "Rojo",
    Verde = "Verde", 
    Azul = "Azul",
    Amarillo = "Amarillo",
}

let colorFavorito: Color = Color.Verde

console.log(`Mi color favorito es ${colorFavorito}`);

// Any

let comodin: any = "Jocker";

comodin = { type: 'Wildcard'}

let someObject: object = { type: 'Wildcard' };



comodin = {}



//Funciones

function add2(a: number, b: number): number {
    return a + b;
}

const sum2 = add(4,6);

function createAdder(a: number): (number) => number {
    return function (b: number) {
        return b + a;
    }
}

const addFour = createAdder(4)

const fourPlus6 = addFour(6)

function fullName(firstName: string, lastName?: string): string {
    return `${firstName} ${lastName}`;
}

const jonathan = fullName('Jonathan','Hernandez');

console.log(jonathan);



