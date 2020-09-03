//Exercicio 1
month = new Array("janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro")
day = new Date

console.log("Exercicio 1:" + day.getDate() + " de " + month[day.getMonth()] + " de " + day.getFullYear())





//Exercicio 2
const data = new Date()
const dia = data.getDate();
const mes = data.getMonth();
const ano = data.getFullYear();

console.log(`Exercicio 2: ${dia}/0${mes + 1}/${ano}`);





//Exercicio 3
var meses = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
]

var eh = new Date()
var mês = meses[eh.getMonth()]
var anho = eh.getFullYear()

console.log(`Exercicio 3: ${mês}/${anho}`);





//Exercicio 4
function compareDates(date) {
    let parts = date.split('/')
    let today = new Date()

    date = new Date(parts[2], parts[1] - 1, parts[0])


    return date >= today ? "Maior" : "Menor"
}


console.log(`Exercicio 4:`);
console.log("30/08/2020:" + compareDates('31/08/2020'))
console.log("11/10/2020:" + compareDates('11/10/2020'))





//Exercicio 5
function ordemCrescente() {
    let datas = [31, 01, 2021];
    datas.sort(function (a, b) {
        return a - b;
    });
    console.log('Exercicio 5: Data Crescente ->' + datas);
}
ordemCrescente();





//Exercicios 6
function entrega() {
    const atual = new Date();
    if (atual.getDate() > 15) {

    }
    console.log("12 Dias para entrega");
}
entrega();





























