let notasTotales = 0;
let notasAprobadas = 0;
let totaldeNotas = 0;

class Alumno {
    constructor (nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
}

function crearAlumno () {
    let nombre = prompt ("Ingrese su nombre");
    let apellido = prompt ("Ingrese su apellido");
    let edad = prompt ("Ingrese su edad");
    let alumno = new Alumno (nombre, apellido, edad);
    return alumno;
}
let alumno = crearAlumno ();
console.log(alumno);

function cargarNotas () {
    i = 1;
    while (i<7) {
        let nota = parseInt(prompt ("Ingrese una nota"));
        if (nota>=7){
        notasTotales = notasTotales + nota;
        notasAprobadas = notasAprobadas + nota;
        totaldeNotas = totaldeNotas + 1;
        } else {
            notasTotales = notasTotales + nota;
            totaldeNotas = totaldeNotas + 1;    
        }
        console.log(notasTotales);
        i++;
    }
}

let notas = cargarNotas ();
let promedio = notasTotales / totaldeNotas;
console.log (alumno.nombre + ", tu promedio es de " + promedio);
alert (alumno.nombre + ", tu promedio es de " + promedio);
