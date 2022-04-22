const prompt = require('prompt');
prompt.start()

prompt.get(['num1','num2'], function (err, mayor) {

  
     if(parseInt(mayor.num1) >= parseInt(mayor.num2))
     {
         //imprime numero mayor
     console.log("El numero mayor es: " + mayor.num1 + " ( Numero 1 )");
    }
    else
     {
        //imprime numero mayor
     console.log("El Numero mayor es : " + mayor.num2 + " ( Numero 2 )");
    }

});
