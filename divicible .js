
const prompt = require('prompt');
prompt.start()

prompt.get(['num1'], function (err, divi) {

if (divi.num1 % 2 === 0 )
     {
console.log("Es divisible por 2" + divi.num1);
     } 
    else
     {
console.log("No es divisible por 2" + divi.num1);
     }
});