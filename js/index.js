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

const crearAlumno = (e) => {
    e.preventDefault();
    let nombre1 = nombre.value;
    let apellido1 = apellido.value;
    alumno = new Alumno(nombre1, apellido1);
    for (i = 0; i < notas.length; i++) {
        if (notas[i].value.length != 0){
            alumno.arrayNotas.push(notas[i].value);
            notas[i].value = "";
        }
    }
    alumnos.push(alumno);
    sumaDeNotas = sumarNotas(alumno);
    alumno.promedio = promedio(alumno);
    subirStorage = storage(alumnos);
    nombre.value = "";
    apellido.value = "";
    mostrarAlumno();
    toast();
}

const storage = (alumnos) => localStorage.setItem("enJSON", JSON.stringify(alumnos));

const sumarNotas = (alumno) => {
    const suma = alumno.arrayNotas.reduce((acumulador, nota) => acumulador + parseInt(nota), 0);
    return suma;
}

const promedio = (alumno) => {
    const promedio1 = Math.round(sumaDeNotas/alumno.arrayNotas.length);
    return promedio1;
}

const toast = () => Toastify({text: "Alumno agregado!", duration: 2000}).showToast();

const alert = (index) => {
    Swal.fire({
        title: '¿Estás seguro de eliminar a este alumno?',
        text: "No podrás revertir esta acción",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, ¡eliminar!'
    }).then((result) => { 
        if (result.isConfirmed) {
            alumnos.splice(index, 1);
            mostrarAlumno();
            Swal.fire(
                '¡Eliminado!',
                'El alumno ha sido eliminado con éxito',
                'success'
                )
        }
      })
}

const mostrarAlumno = () => {
    listaDeAlumnos.innerHTML = "";
    alumnos.forEach((alumno, index) => {
        listaDeAlumnos.innerHTML += `
            <tr scope="row">
                <td class="alumnos">${alumno.nombre}</td>
                <td class="alumnos">${alumno.apellido}</td>
                <td class="alumnos">${alumno.arrayNotas[0] ? alumno.arrayNotas[0] : ""}</td>
                <td class="alumnos">${alumno.arrayNotas[1] ? alumno.arrayNotas[1] : ""}</td>
                <td class="alumnos">${alumno.arrayNotas[2] ? alumno.arrayNotas[2] : ""}</td>
                <td class="alumnos">${alumno.arrayNotas[3] ? alumno.arrayNotas[3] : ""}</td>
                <td class="alumnos">${alumno.arrayNotas[4] ? alumno.arrayNotas[4] : ""}</td>
                <td class="alumnos">${alumno.arrayNotas[5] ? alumno.arrayNotas[5] : ""}</td>
                <td class="alumnos">${alumno.promedio}</td>
                <td><button class="delete" onclick="alert(${index})">Eliminar</button></td>
            </tr>
        `;
    });
}

btn.addEventListener("click", crearAlumno);
