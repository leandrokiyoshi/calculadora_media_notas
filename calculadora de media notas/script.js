var nome = "Leandro" // variavel nota
var NotaDoPrimeiroBimestre = 9.43 // variaveis notas
var NotaDoSegundoBimestre = 7.23
var NotaDoTerceiroBimestre = 4.23
var NotaDoQuartoBimestre = 2.18 
var notaFinal = (NotaDoPrimeiroBimestre + NotaDoSegundoBimestre + NotaDoTerceiroBimestre + NotaDoQuartoBimestre) / 4 //calculo simples

var notaFixada = notaFinal.toFixed( 1 ) // arredonda e decide quantas casas decimais

console.log("Bem Vindo " + nome) // mensagem de boas vindas
//console.log("Sua nota do primeiro semestre foi: " + NotaDoPrimeiroBimestre) // apenas nota do primeiro semestre
console.log(notaFinal) //nota final casas decimais liberadas
console.log(notaFixada) //arredondada (sem muitas casas decimais)