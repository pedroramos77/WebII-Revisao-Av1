// REV AV1 WEB2

// OPERADORES


// num = 20

// document.write(`${num} - 2 = ${num -2}`)

// ----------------------

// a1 = +(prompt("Digite um numero"))
// b1 = +(prompt('Digite um numero'))

// alert(`A soma de ${a1} e ${b1} é ${a1 + b1}`)
// document.write(`A soma de ${a1} e ${b1} é ${a1 + b1}`)
// console.log(`A soma de ${a1} e ${b1} é ${a1 + b1}`)

// console.log('a soma dos valores ' + a1, 'e ' + b1, 'é = ' + (a1 + b1))

// --------------------------------------

// num2 = 10;

// document.write(' '+ num2--)
// document.write(' ' + num2)

// var x = 10
// var y = '10'

// document.write(`<br>O valor ${x} é igual ${y}? ${x == y}`)
// document.write(`<br>O valor ${x} é igual identico ${y}? ${x === y}`)

// === -> identico
// == -> igual

// document.write(`O valor de ${x} é diferente de ${y}? ${x != y}`)
// document.write(`<br>O valor de ${x} é diferente de ${y}? ${x !== y}`)

// ----------------------------------

// var n1 = +(prompt('Digite um numero'))
// var n2 = parseFloat(prompt('DIgite um numero'))


// document.write(`<br>O valor de ${n1} > ${n2}? ${n1 > n2}`)
// document.write(`<br>O valor de ${n1} >= ${n2}? ${n1 >= n2}`)
// document.write(`<br>O valor de ${n1} < ${n2}? ${n1 < n2}`)
// document.write(`<br>O valor de ${n1} <= ${n2}? ${n1 <= n2}`)

// ------------------------------

// console.log(20 < 40 && 30 > 5) //true
// console.log(20 < 40 && 30 < 5) //false
// console.log(20 < 40 || 30 < 5) //true
// console.log(2 < 3) // true
// console.log(!(2 < 3)) // false
// console.log(!!(2 < 3)) // true

// -----------------------------------------

// BIBLIOTECA MATH


// -----pow------------

// x = 4.6
// y = 2

// document.write(`O numero ${x} elevado a 2 é = ${Math.pow(x, 2)}`)

// --------------------

// a = +(prompt('Digite um numero!'))
// b = +(prompt('Digite a potencia'))

// document.write(`o valor de ${a} elevado a ${b} é de ${Math.pow(a,b)}`)

// -----------------sqrt - cbrt - round - ceil - floor - random ------------

// to fixed - casas decimais
// round - arredonda matematicamente 
// ceil - arredonda pra cima
// floor - arredonda pra baixo

// document.write(`<br> a raiz quadrada de ${x} é ${Math.sqrt(x).toFixed(2)}`)

// document.write(`a raiz cubica de ${x} é ${Math.cbrt(x).toFixed(2)}`)

// document.write(`o numer ${x} arredondado é ${Math.round(x)}`)

// document.write(`o numero ${x} arredondado pra cima é ${Math.ceil(x)}`)

// document.write(`o numer ${x} arredondado pra baixo é ${Math.floor(x)}`)



// document.write(`Numero aleatori0 ${Math.random().toFixed(1)}`)

// document.write(`Numero aleatori0 ${(Math.random() * 50).toFixed(0) + 1}`)



// ----------- trunc - max - min ---------------------------

// a = parseFloat(prompt('Digite um numero'))

// document.write(`a parte inteira do numero ${a} é ${Math.trunc(a)}` )


// b = [1,4,2,7,5,46,6,5,5,6,4,9]
// document.write(`o maior numero é ${Math.max(...b)}`)
// document.write(`<br>O  menor valor da lista é ${Math.min(...b)}`)


// ---------------if - else if - else-----------------------

// idade = +(prompt('Digite sua idade'))

// if(idade >= 18){
//     document.write(`voce tem ${idade}, é maior de idade`)
// }
// else{
//     document.write(`voce tem ${idade}, é menor de idade`)
// }

// nota = +(prompt('Digite sua nota'))

// if(nota >= 7){
//     document.write(`Aprovado!`)
// }
// else if(nota >= 6 && nota < 7){
//     document.write(`Recuperação!`)
// }
// else{
//     document.write(`Reprovado!`)
// }

// ds = prompt('Digite o dia da semana')
// 	if(ds == 'sabado' || ds == 'domingo'){
// 		document.write(`<br>Bom final de semana!`)
// 	}else if(ds == 'segunda'){
// 		document.write(`<br>Boa sorte!`)
// 	}else if(ds =='sexta'){
// 		document.write(`<br>Sextooooo!`)
// 	}else{
// 		document.write(`<br>dia normal, meus pesames!`)
// 	}




