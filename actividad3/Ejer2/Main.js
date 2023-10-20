import Instituto from "./Instituto.js";


const Fleming = new Instituto("safff", "Instituto Fleming");
        Fleming.agregarGrupo("ASDDA", 300);
        Fleming.agregarGrupo("BSGFF", 5);
        Fleming.agregarGrupo("dgdgh", 45);

        console.log("Código del Fleming: " + Fleming.codigoInstituto);
        console.log("Número de alumnos : " + Fleming.NumAlumnos());

        console.log("Grupos: ")
        Fleming.mostrarGrupos();


        