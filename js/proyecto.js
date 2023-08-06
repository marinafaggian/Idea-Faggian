let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let btn = document.getElementById("btn");
let alumno;
let notas = Array.from(document.getElementsByClassName("input nota"));

class Alumno {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.notas = notas;
    }
}


function crearAlumno(e) {
    console.log("Hola, funcioná");
    e.preventDefault();
    let nombre1 = nombre.value;
    let apellido1 = apellido.value;
    let notas1 = notas.value;
    nombre.value = "";
    apellido.value = "";
    alumno = new Alumno(nombre1, apellido1, notas1);
    console.log(alumno);
}

let obtenerNotasAprobadas = (alumno) => {
    let notasAprobadas = alumno.notas.filter((nota) => nota >= 7);
    console.log(notasAprobadas, "Estas son las notas aprobadas");
    return notasAprobadas;
};
function sumarNotas(alumno) {
    const suma = alumno.notas.reduce((acumulador, nota) => acumulador + nota, 0);
    console.log(suma,"Esto es la suma del array");
    return suma;
}

// let notas = cargarNotas();
// let aprobadas = obtenerNotasAprobadas(alumno);
// let sumaDeNotas = sumarNotas(alumno);
// let promedio = sumaDeNotas / alumno.notas.length;

// if (promedio >= 7) {
//     console.log(alumno.nombre + ", tu promedio es de " + Math.round(promedio) + ". Tu materia está aprobada");
// } else {
//     console.log(alumno.nombre + ", tu promedio es de " + Math.round(promedio) + ". Tu materia está desaprobada");
// }

// promedio >= 7 ? console.log(alumno.nombre + ", tu promedio es de " + Math.round(promedio) + ". Tu materia está aprobada") : console.log(alumno.nombre + ", tu promedio es de " + Math.round(promedio) + ". Tu materia está desaprobada")

// console.log(promedio, "Este es el promedio sin redondear");


btn.addEventListener("click", crearAlumno);
