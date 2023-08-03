class Alumno {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.notas = [];
    }
}

function crearAlumno() {
    let nombre = prompt("Ingrese su nombre");
    let apellido = prompt("Ingrese su apellido");
    let alumno = new Alumno(nombre, apellido);
    return alumno;
}
// let alumno = crearAlumno();
// console.log(alumno);

function cargarNotas() {
    i = 1;
    while (i < 7) {
        let nota = alumno.notas.push(parseInt(prompt("Ingrese una de sus calificaciones")));
        i++;
    }
}
console.log(alumno.notas);

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

if (promedio >= 7) {
    alert(alumno.nombre + ", tu promedio es de " + Math.round(promedio) + ". Tu materia está aprobada");
} else {
    alert(alumno.nombre + ", tu promedio es de " + Math.round(promedio) + ". Tu materia está desaprobada");
}

console.log(promedio, "Este es el promedio sin redondear");

