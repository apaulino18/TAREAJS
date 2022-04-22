const prompt = require('prompt');
prompt.start()

prompt.get(['num1','num2','num3'], function (err, mayor) {

  
    
     if (parseInt(mayor.num1) == parseInt(mayor.num2) && parseInt(mayor.num2) == parseInt(mayor.num3){
        console.log("Numero 1, Numero 2 y Numero 3 son iguales! y valen: " + mayor.num1);
        }
        else{
          
           if (parseInt(mayor.num1) > parseInt(mayor.num2)){
              if (parseInt(mayor.num1) > parseInt(mayor.num1)){
                 console.log("Numero 1 es Mayor y vale: " + mayor.num1);
                 }
                 else{
                    console.log("Numero 3 es Mayor y vale: " + mayor.num3);
                    }
           }
           else{
              if(parseInt(mayor.num1) < parseInt(mayor.num2)){
                 if (parseInt(mayor.num2) > parseInt(mayor.num3)){
                    console.log("Numero 2 es Mayor y vale: " + mayor.num2);
                    }
                    else{
                       console.log("Numero 3 es Mayor y vale: "+ mayor.num3);
                       }
                 }
              }
        }
 console.log("Numero 1 = " + mayor.num1  + "Numero 2 = " + mayor.num2  + "Numero 3 = " + mayor.num3);
      
   });


    
   
 