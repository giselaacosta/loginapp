export class Persona {
    nombre:string;
    apellido:string;
    fechanac:string;
    foto:string;
    sexo:string;
    email:string;
    
    constructor(nuevoNombre:string, nuevoApellido:string,fechaNac:string,foto:string,sexo:string,email:string) {
       this.nombre=nuevoNombre;
       this.apellido=nuevoApellido;
       this.fechanac=fechaNac;
       this.foto=foto;
       this.sexo=sexo;
       this.email=email;

    }
}