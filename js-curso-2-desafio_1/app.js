let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function verificarConsole() {
    console.log ('O botão foi clicado');
}

function verificarAlerta() {
    alert('Eu amo JS!');
}

function verificarPrompt() {
    let cidade = prompt('Digite o nome de uma cidade do Brasil:');
    alert(`Estive em ${cidade} e lembrei de você`);
}

function verificarSoma() {
    let num1 = parseInt(prompt('Digite um número:'));
    let num2 = parseInt(prompt('Digite outro número:'));

    let soma = num1 + num2

    alert(`A soma de ${num1} e ${num2} é igual a ${soma}.`)
}