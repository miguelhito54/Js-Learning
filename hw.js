//------var declaration-------//
console.log("Hello world");
document.write("hello world");
//alert("hello world");
var name = 'Miguel Angel';
var surname = 'Garcia Rojas';
const pi = 3.1416;
//let name = 'Santiago Castaño'
console.log(name);

let age = 25;
if( age > 20 ){
    let isAdult = true;
    isAdult= false;
    if(!isAdult){
        console.log(isAdult);
        console.log(age);
    }
    console.log(age);
}
function changeage(){
   age= 30;
}
changeage();
console.log(age);
//console.log(isAdult);

//----------template strings--------//

country = "colombia";
city = "medellin";
console.log("el pais es: " + country + " y la ciudad es " + city);
console.log(`el pais es: ${country} y la ciudad es: ${city}`); //`backticks
document.write(`<h1>${country}</h1>`);

//--------functions-----//
function saludar()
{
    console.log('hello everybody');
}

function value()
{
    return 3.1416;//return termina la funcion.
    console.log('test')
}
let data = value();
saludar();
console.log(data);

//-------function with parameters------//
function person(name,lastname,age,phone = 0)
{
    const message = (`la persona se llama: ${name} ${lastname} y tiene una edad de: ${age} y su telefono es: ${phone}`)
    return message;
}
let infoPerson = person("Rosalba","Perez", 45, 112231);
console.log(infoPerson);
//person ( 45,"Perez","Rosalba");

//---Arrow Function---//
const lenguage = ()=> console.log("javascript");
const lenguages = ()=>{
    console.log('test1');
    console.log('test2');
} 
lenguages();

const people = (name,lastname,age,phone = 0) => {
    const message = (`la persona se llama: ${name} ${lastname} y tiene una edad de: ${age} y su telefono es: ${phone}`)
    return message;
    }
let dataPeople = people("santiago","castaño", 26, 2342431);
console.log(dataPeople);

//..array, map(), filter..//
//css (flexbox).