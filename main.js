const prompt = require("prompt-sync")();
let  num1 , num2,num3;

num1= Number(prompt("Ingresa el primer numero: "))
num2= Number(prompt("Ingresa el seegundo numero: "))
num3= Number(prompt("Ingresa el tercer numero: "))

if (num1 > num2  && num1 > num3 && num2 > num3 ) {
    console.log("El orden de mayor a menor es: ", num1 , num2 , num3);
    console.log("El orden de menor a mayor es: ", num3 , num2 , num1);
}
else if (num1 > num2  && num1 > num3 && num3 > num2 ) {
    console.log("El orden de mayor a menor es: ", num1 , num3 , num2);
    console.log("El orden de menor a mayor es: ", num2 , num3 , num1);
}
else if(num2 > num1  && num2 > num3 && num1 > num3){
    console.log("El orden de mayor a menor es: ", num2 , num1 , num3);
    console.log("El orden de menor a mayor es: ", num3 , num1 , num2);
}
else if(num2 > num1  && num2 > num3 && num3 > num1){
    console.log("El orden de mayor a menor es: ", num2 , num3 , num1);
    console.log("El orden de menor a mayor es: ", num1 , num3 , num2);
}
else if(num3 > num1  && num3 > num2 && num2 > num1){
    console.log("El orden de mayor a menor es: ", num3 , num2 , num1);
    console.log("El orden de menor a mayor es: ", num1 , num2 , num3);
}

else if(num3 > num1  && num3 > num2 && num1 > num2){
    console.log("El orden de mayor a menor es: ", num3 , num1 , num2);
    console.log("El orden de menor a mayor es: ", num2 , num1 , num3);
}
else{
    console.log("los numeros son iguales: ");
    
}