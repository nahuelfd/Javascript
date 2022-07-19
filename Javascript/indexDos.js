
//function mensaje(){
    //let nombre = prompt("ingrese su nombre");
    //let resultado = `hola como estas ${nombre}`;
   // alert(resultado);
//}

//mensaje()

//function interes(monto1, dias) {
    //if(Number(monto1) && Number(dias)){
    //    let = 
   // }
//}

//let monto1 = parseInt(prompt("ingrese el monto a invertir"));
//if(Number(monto1)){
   // const q = (monto1,interes) => monto1 * interes;

    
   // const interes = 1.0441
    
   // let resultado = `El retorno a 30 dias es de ${q(monto1,interes)}`;
  //  console.log(resultado);
//}else{
  //  alert("numero inválido");
//}

let amount = parseInt(prompt("decime un numero"));

if(Number(amount)){
    const RATE = 1.0441
    const result = `Retorno a 30 días: ${calculateEarnings(amount, RATE)}`
    console.log(result);


function calculateEarnings(amount, interestRATE){
    return amount * interestRATE
}
}else{
    alert("monto invalido")
}


