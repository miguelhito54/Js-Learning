
function add(){
    let numberOne = parseInt(document.getElementById('n1').value);
let numberTwo = parseInt(document.getElementById('n2').value);

    let resultado = parseInt(numberOne + numberTwo);
        document.getElementById('Result').innerHTML = resultado
              }
function substract(){
    let numberOne = parseInt(document.getElementById('n1').value);
let numberTwo = parseInt(document.getElementById('n2').value);

    let resultado = parseInt(numberOne - numberTwo);
        document.getElementById('Result').innerHTML = resultado
                    }
function divide(){
    let numberOne = parseInt(document.getElementById('n1').value);
let numberTwo = parseInt(document.getElementById('n2').value);

    let resultado = parseInt(numberOne / numberTwo);
        document.getElementById('Result').innerHTML = resultado
                }
function multiply(){
    let numberOne = parseInt(document.getElementById('n1').value);
let numberTwo = parseInt(document.getElementById('n2').value);

    let resultado = parseInt(numberOne * numberTwo);
        document.getElementById('Result').innerHTML = resultado
                    }
function circlearea(){
     const pi = 3.1416;
        let radius = parseInt(document.getElementById('rad').value);
    let radiuscuad = parseInt(radius * 2);
        let resultado = parseInt(pi * radiuscuad);
            document.getElementById('Result').innerHTML = resultado
}

function trianglearea(){
    let numberOne = parseInt(document.getElementById('n1').value);
        let numberTwo = parseInt(document.getElementById('n2').value);
    let resmult= parseInt(numberOne * numberTwo);
            let resultado = parseInt( resmult / 2);

        document.getElementById('Result').innerHTML = resultado



}
