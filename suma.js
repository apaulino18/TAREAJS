const prompt = require('prompt');
prompt.start()

prompt.get(['num1','num2'], function (err, suma) {

  suma = parseInt(suma.num1) + parseInt(suma.num2)
     console.log(suma)
});
    
   
   
  
