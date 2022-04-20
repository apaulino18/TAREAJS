
const prompt = require('prompt');
prompt.start();

prompt.get(['num1'], function (err, divi) {
num1 = parseInt(divi.num1);
num2 = 2;
while
(num1 % num2 !==0 && num2 < num1 / 2) {
num2++;

}
if (num1 % num2 !== 0 )  {
console.log("El numero es primo");
     } 
    else  {
console.log("No es primo1");
     }
});