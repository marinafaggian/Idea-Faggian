let form = document.getElementById("form");
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let btn = document.getElementById("btn");
let notas = document.getElementsByClassName("input nota");
let listaDeAlumnos = document.getElementById("tbody");
let alumno;
let notas1 = notas.value;
let sumaDeNotas;
let prom;
let alumnos = [];

class Alumno {
    constructor(nombre, apellido,) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.arrayNotas = [];
    }
}

function crearAlumno(e) {
    console.log("Hola, funcioná");
    e.preventDefault();
    let nombre1 = nombre.value;
    let apellido1 = apellido.value;
    alumno = new Alumno(nombre1, apellido1, notas1);
    for (i = 0; i < notas.length; i++) {
        alumno.arrayNotas.push(notas[i].value);
        notas [i].value = "";
    }
    alumnos.push(alumno);
    console.log(alumno);
    sumaDeNotas = sumarNotas(alumno);
    prom = promedio(alumno);
    nombre.value = "";
    apellido.value = "";
    mostrarAlumno();
}

function sumarNotas(alumno) {
    const suma = alumno.arrayNotas.reduce((acumulador, nota) => acumulador + parseInt(nota), 0);
    console.log(suma,"Esto es la suma del array");
    return suma;
}

function promedio(alumno) {
    const promedio1 = sumaDeNotas/alumno.arrayNotas.length;
    console.log(promedio1, "promedio")
    return promedio1;
}

function eliminarAlumno (index) {
    alumnos.splice(index, 1);
    mostrarAlumno();
}

function mostrarAlumno () {
    listaDeAlumnos.innerHTML = "";
    alumnos.forEach((alumno, index) => {
        listaDeAlumnos.innerHTML += `
            <tr scope="row">
                <td>${alumno.nombre}</td>
                <td>${alumno.apellido}</td>
                <td>${alumno.arrayNotas[0]}</td>
                <td>${alumno.arrayNotas[1]}</td>
                <td>${alumno.arrayNotas[2]}</td>
                <td>${alumno.arrayNotas[3]}</td>
                <td>${alumno.arrayNotas[4]}</td>
                <td>${alumno.arrayNotas[5]}</td>
                <td>${prom}</td>
                <td><button class="delete" onclick="eliminarAlumno(${index})">Eliminar</button></td>
            </tr>            
        `;
    });
}

btn.addEventListener("click", crearAlumno);
console.log(alumnos);