    document.write("<h1> Hola JavaScript </h1>")
    // Comentarios de una linea
    /* Comentarios de bloque*/
    
    let nombre="Carlos"

    // Array

    let datos=["Ana","Pablo","Carlos"]
    
    let edades=[14,34,22]
    
    let objetoDatos={
        nombre:"Carlos",
        edad:25,
        cuenta:"alumnos",
        notas:[6.8,6.2,7.0]
    }   

    console.log(datos)
    console.log(edades)
    console.log(objetoDatos)

    let uno=1
    let uno_string="1"

    console.log(uno==uno_string)
    console.log(uno===uno_string)

    // Estructuras de control

    if(uno==uno_string)
        console.log("Son iguales ?")
    if(uno===uno_string){
        console.log("Son iguales iguales")
    }
    else{
        console.log("No son iguales")
    }
    
    let datosAlumnos="vespertino"
        switch(datosAlumnos){
        case "diurno":
            console.log("Es alumno del dia")
            break;
        case "vespertino":
            console.log("Es Alumno de la moche")
            break;
        default:
            console.log("No es alumno")
    }
    
    //Cliclos

    //while

    /*Mostrar los primeros 10 numeros positivos*/

    let cont=1;

    while(cont <=10){
        console.log(cont)
        cont=cont+1
    }

    //FOR

    let nombres=["Ana","Pablo","Carlos"]

    for(let i=0;i<nombre.length;i++){   
        console.log(nombres[i])
    }       

    //funciones

    function mensaje(){
        console.log("Hola")
    }

    mensaje()
    //Nota: if( numero % 2 == 0)
    //Muestre la cantidad de numeros pares que
    //existen dentro de un arreglo
    //use una funcion que retone si el numero
    // es par o no.

    let numeros =[45,33,22,14,8,24,3,12,1,44]
    let contp   =0;
    function es_par(num){

    
        if(num % 2 == 0)
            return true
        return false
    }
    for(let i=0;i<numeros.length;i++){
        if(es_par(numeros[i]))
            contp++;
    }

    console.log(contp)


