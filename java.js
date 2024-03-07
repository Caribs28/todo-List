const adicionarTarefa = document.getElementById("adicionartarefa")

if (adicionarTarefa != null) {
    adicionarTarefa.addEventListener("click", () => {

        console.log("Adicionou Tarefa.");
    })
}

const botoesdeletar = document.getElementsByClassName("deletar")
console.log(botoesdeletar);
for (let index = 0; index < botoesdeletar.length; index++) {
    const element = botoesdeletar[index];
    element.addEventListener("click", (event) => {
        console.log(event);
    console.log("Tarefa deletada.");
    })
}

const check = document.getElementsByClassName ("checkbox1")
for (let index = 0; index < check.length; index++) {
    const element = check[index];
    element.addEventListener ("click", (event) =>{
console.log(event);
console.log("Tarefa concluída.");
    })
}

// Variáveis
const tarefaInput = document.getElementById("search");
const adicionarBotao = document.getElementById("adicionartarefa");
const listaTarefas = document.getElementById("tarefas");

// Event Listeners
adicionarBotao.addEventListener("click", tarefa);
tarefaInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        tarefa();
    }
});

// Funções
function tarefa() {
    const tarefaTexto = tarefaInput.value;
    if (tarefaTexto.trim() !== "") {
        const tarefas = document.getElementsByClassName ("tarefa")
        const novaTarefa = document.createElement(`div`);
        novaTarefa.innerHTML = `
      <input class="checkbox1" type="checkbox">
      <label for="checkbox">${tarefaTexto}</label>
      <button onclick="" class="deletar" id="tarefa-${tarefas.length +1}"> Deletar </button>`;
        novaTarefa.className = "tarefa"
        listaTarefas.appendChild(novaTarefa);
        tarefaInput.value = "";
    }
}

// function listarTarefas(sequencia, status, tarefa) {
   
//     const divTarefa = createElement(`div`)
//     divTarefa.className = "tarefa"
//     divTarefa.id = "tarefa-" + sequencia
//     divTarefa.onclick = function () { alterarStatus() }

//     const spanTarefa = document.createElement(`span`)
//     spanTarefa.className = "status"
//     spanTarefa.appendChild(document.createTextNode(tarefa))

//     const divAcao = document.createElement(`div`)
//     divAcao.className "deletar" 
// }



// document.getElementById("deletar1").addEventListener("click", validar, false);

// function validar() {
//     var $divMensagem = document.getElementById('divMensagem');
//     var $txtNome = document.getElementById('txtNome');

//     if ($txtNome.value.length == 0)
//         $divMensagem.innerHTML = "Preencha o campo para adicionar uma nova tarefa.";
//     else
//         $divMensagem.innerHTML = '';
// }