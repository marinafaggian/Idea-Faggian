const feriadosbtn = document.getElementById("feriadosbtn");
const lista = document.querySelector('#feriados');
let isListaVisible = JSON.parse(localStorage.getItem("flag")) || false;

const toggleListaVisibility = () => {
    isListaVisible = !isListaVisible;
    isListaVisible ? lista.style.display = "block" : lista.style.display = "none";
    localStorage.setItem("flag", isListaVisible);
}
const incorporarFeriados = async () => {
    const resp = await fetch("../json/feriados.json");
    const feriados = await resp.json();
    if (isListaVisible) {
        lista.innerHTML = '';
        feriados.feriados.forEach((feriado) => {
            const li = document.createElement("li");
            li.innerHTML = `
                <h4 class="feriados">${feriado.motivo}</h4>
                <p class="feriados">${feriado.fecha}</p>
            `;
            lista.append(li);
        });
    } else {
        lista.innerHTML = '';
    }
}

feriadosbtn.addEventListener("click", () => {
    toggleListaVisibility();
    incorporarFeriados();
});

toggleListaVisibility();