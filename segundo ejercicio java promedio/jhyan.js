
function promedio() {

    nota1= new Number (prompt ("ingrese la primera nota"));

    while( nota1 > 5 ){

        if(  nota1 >  5 ){
            alert("La nota ingresada es erronea")
        }

        nota1= new Number (prompt ("ingrese la primera nota"));
    }


    alert("Siguiente")

    nota2= new Number (prompt ("ingrese la segunda nota"));

    while( nota2 > 5 ){

        if(nota2 >  5){
            alert("La nota ingresada es erronea")
        }

        nota2= new Number (prompt ("ingrese la segunda nota"));
    }


    alert("Siguiente")

    nota3= new Number (prompt ("ingrese la tercera nota"));

    while( nota3 > 5 ){

        if(nota3 >  5){
            alert("La nota ingresada es erronea")
        }

        nota3= new Number (prompt ("ingrese la tercera nota"));
    }


    alert("Siguiente")

    nota4= new Number (prompt ("ingrese la cuarta nota"));

    while( nota4 > 5 ){

        if(nota4 >  5){
            alert("La nota ingresada es erronea")
        }

        nota4= new Number (prompt ("ingrese la cuarta nota"));
    }


    alert("Siguiente")

    nota5= new Number (prompt ("ingrese la quinta nota"));

    while( nota5 > 5 ){

        if(nota5 >  5){
            alert("La nota ingresada es erronea")
        }

        nota5= new Number (prompt ("ingrese la quinta nota"));
    }




    
    promedio = (nota1+nota2+nota3+nota4+nota5)/5
    document.write("Su promedio es " )
    document.write(promedio )

     if (promedio<=2.9 && promedio>=0) {
         document.write("/ promedio bajo")
        
     }
    
     else if (  (promedio<=3.5 && promedio>=3.0) ) {
         document.write("/ promedio basico")
     }
        
      else if (  (promedio<=4.4 && promedio>=3.6) ) {
         document.write("/ promedio alto")
     }

     else if (  (promedio<=5.0 && promedio>=4.5) ) {
         document.write("/ promedio superior")
     }

    
    
}