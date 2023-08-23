let form = document.getElementById("form");
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let btn = document.getElementById("btn");
let notas = document.getElementsByClassName("input nota");
let listaDeAlumnos = document.getElementById("tbody");
let alumno;
let sumaDeNotas;
let alumnos = [];
let subirStorage;

class Alumno {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.arrayNotas = [];
        this.promedio = 0;
    }
}

function crearAlumno(e) {
    e.preventDefault();
    let nombre1 = nombre.value;
    let apellido1 = apellido.value;
    alumno = new Alumno(nombre1, apellido1);
    for (i = 0; i < notas.length; i++) {
        alumno.arrayNotas.push(notas[i].value);
        notas [i].value = "";
    }
    alumnos.push(alumno);
    console.log(alumno);
    sumaDeNotas = sumarNotas(alumno);
    alumno.promedio = promedio(alumno);
    subirStorage = storage(alumnos);
    nombre.value = "";
    apellido.value = "";
    mostrarAlumno();
    toast();
}

function storage(alumnos) {
    localStorage.setItem("enJSON", JSON.stringify(alumnos));
}

function sumarNotas(alumno) {
    const suma = alumno.arrayNotas.reduce((acumulador, nota) => acumulador + parseInt(nota), 0);
    console.log(suma,"Esto es la suma del array");
    return suma;
}

function promedio(alumno) {
    const promedio1 = Math.round(sumaDeNotas/alumno.arrayNotas.length);
    console.log(promedio1, "promedio")
    return promedio1;
}

function toast () {
    Toastify({
        text: "Alumno agregado!",
        duration: 2000
        }).showToast();
}

function alert (index) {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => { 
        if (result.isConfirmed) {
            alumnos.splice(index, 1);
            mostrarAlumno();
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
                )
        }
      })
}

function mostrarAlumno () {
    listaDeAlumnos.innerHTML = "";
    alumnos.forEach((alumno, index) => {
        listaDeAlumnos.innerHTML += `
            <tr scope="row">
                <td class="alumnos">${alumno.nombre}</td>
                <td class="alumnos">${alumno.apellido}</td>
                <td class="alumnos">${alumno.arrayNotas[0]}</td>
                <td class="alumnos">${alumno.arrayNotas[1]}</td>
                <td class="alumnos">${alumno.arrayNotas[2]}</td>
                <td class="alumnos">${alumno.arrayNotas[3]}</td>
                <td class="alumnos">${alumno.arrayNotas[4]}</td>
                <td class="alumnos">${alumno.arrayNotas[5]}</td>
                <td class="alumnos">${alumno.promedio}</td>
                <td><button class="delete" onclick="alert(${index})">Eliminar</button></td>
            </tr>            
        `;
    });
}

btn.addEventListener("click", crearAlumno);
