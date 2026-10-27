const nomes = ["Gustavo", "Bernardo", "Victorino"];

const lista = document.getElementById("lista");

const input = document.getElementById("input");

function mostrarLista() {
    lista.innerHTML = "";
    for (let nome of nomes) {
      lista.innerHTML+= `<li>${nome}</li>`;
    }
}

function addNome() {
    let nome = input.value.trim();

    if (nome === "") return;

    nomes.push(nome);

    mostrarLista();
    input.value = "";
    input.focus();
}
mostrarLista();