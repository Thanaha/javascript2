var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

var form = document.querySelector("#form-adiciona");
var paciente = obtemPacienteDoFormulario(form);

var pacienteTr = montaTr(paciente);

// adicionando o paciente na tabela
var tabela = document.querySelector("#tabela-pacientes");

tabela.appendChild(pacienteTr);

});

function obtemPacienteDoFormulario(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    var nomeTd = document.createElement("td");
    nomeTd.classList.add("info-nome");
    nomeTd.textContent = paciente.nome; 
    
    var pesoTd = montaTd(paciente.peso, "info-peso"); 

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;
}


function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
}



//
