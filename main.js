const form = document.getElementById('form-contato');
let contatos = [];
let telefones = []; 

let linhas = ' ';
let qtdContatos = 0;

form.addEventListener('submit', function(e){    
    e.preventDefault();

    addLinhasTabela();
    addContatoTabela();
    contatosAdicionados();
})

function addContatoTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function addLinhasTabela(){
    const nomeContato = document.getElementById("input-contato");
    const numeroContato = document.getElementById("input-numero");    
    
    if(contatos.includes(nomeContato.value)){
        alert(`Este contato ${nomeContato.value} já foi salvo. Verifique na sua lista de contatos.`)
    }else{
        contatos.push(nomeContato.value);
        telefones.push(parseInt(numeroContato.value));

        let linha = '<tr>';
        linha += `<td>${nomeContato.value}</td>`;
        linha += `<td>${numeroContato.value}</td>`;
        linha += '</tr>';
        linhas += linha;
    }
}

function contatosAdicionados(){
    qtdContatos = parseInt(contatos.length);
    document.getElementById('qtd-contato').innerHTML = qtdContatos;
}