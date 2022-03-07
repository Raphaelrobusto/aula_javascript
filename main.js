// var nome = 'Raphael Robusto';
// var n1 = 32;
// var n2 = 10;
// var frase = "Japão é o melhor time do mundo";
// //alert(nome + ' tem ' + idade + ' anos');
// //alert(idade + idade2);
// console.log(nome);
// console.log(n1 + n2);
// console.log(frase.replace("Japão", "Brasil"));
// alert(frase.replace("Japão", "Brasil"));

// var lista = ['maça', 'pera', 'banana'];
// //lista.push('uva');
// //lista.pop();
// console.log(lista);
// console.log(lista.toString());
// console.log(lista.join(' - '));

// var fruta = {nome: "Maça", cor: "Vermelha"}
// console.log(fruta.nome);
// alert(fruta.cor);

// var frutas = [{nome: "Maça", cor: "Vermelha"}, {nome: "Uva", cor: "Roxa"},]
// console.log(frutas);
// alert(frutas[1].nome);

// var idade = prompt('Qual a sua Idade');
// if (idade >= 18){
//     alert('maior de idade');
// } else{
//     alert('menor de idade');
// };

// var count = 0;
// while (count <= 5) {
//     console.log(count);
//     alert(count);
//     count++;
// };

// var count;
// for(count=0; count <= 5; count++) {
//     alert(count);
// }

// var d = new Date();
// alert(d.getFullYear());
// alert(d.getDay());
// alert(d.getHours());
// alert(d.getMinutes());

// function soma(n1, n2) {
//      return n1 + n2;
// }
// alert(soma(5, 10));

// var validar = 0;
// function validaIdade(idade) {
//     if (idade >= 18) {
//         validar = true
//     } else {
//         validar = false
//     } 
//     return validar;
// }

// var idade = prompt('Qual a sua idade? ');
// validaIdade(idade)
// console.log(validar);

function clicou() {
    document.getElementById('agradecimento').innerHTML = "<b>Obrigado por Clicar no botão</b>";
    //console.log(document.getElementById('agradecimento'));
};

function redirecionar() {
    //window.open("https://www.google.com.br");
    window.location.href = "https://www.google.com.br"
};

function trocar(elemento) {
    //document.getElementById('mouseover').innerHTML = 'Obrigado por passar o mouse'
    elemento.innerHTML = 'Obrigado por passar o mouse'
    //alert('trocar texto');
}
function voltar(elemento) {
    //document.getElementById('mouseover').innerHTML = 'Passe o mouse aqui'
    elemento.innerHTML = 'Passe o mouse aqui'
}

function load() {
    alert('Página carregada');
}

function funcaoChange(elemento) {
    console.log(elemento.value);
}