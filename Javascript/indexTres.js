

let amount = parseInt(prompt("Ingrese un monto a invertir"));
if(isNaN(amount)){
    console.log("Monto inválido");
    amount = parseInt(prompt("Ingrese un monto a invertir"));
}
if(Number(amount)){
    const RATE = 1.0441
    const result = `Retorno a 30 dias: ${calculateEarnings(amount, RATE)}`
    console.log(result);

}


function calculateEarnings(amount, interestRate) {
    return amount * interestRate
    
}
