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




