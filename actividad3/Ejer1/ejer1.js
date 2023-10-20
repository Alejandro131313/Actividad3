function separarNumeros(...datos){

var numeros=[];
for(var i=0;i<datos.length;i++){

    if(!isNaN(datos[i])){
        numeros.push(datos[i])
    }
}

return numeros;
}

console.log(separarNumeros(1,34,"Hola","Adios",5678,"asdf","1234",1));