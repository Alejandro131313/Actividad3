import Grupo from "./Grupo.js";

export default class Instituto {
    constructor(codigoInstituto, nombre) {
        this.codigoInstituto = codigoInstituto;
        this.nombre = nombre;
        this.grupos = [];
            }
            
            agregarGrupo(codigoGrupo, numAlumnos) {
                const grupo = new Grupo(codigoGrupo, numAlumnos);
                this.grupos.push(grupo);
            }
            
            
            NumAlumnos() {
                let Alumnos = 0;
                 for (const grupo of this.grupos) {
                    Alumnos += grupo.numAlumnos;
                 }
                return Alumnos;
            }

            mostrarGrupos() {
                for (const grupo of this.grupos) {
                    console.log(" Código: " + grupo.codigoGrupo + ", Alumnos por grupo: " + grupo.numAlumnos);
                }
            }
        }
      