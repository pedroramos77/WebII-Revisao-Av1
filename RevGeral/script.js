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

// document.write(`numero aleatorio entre 1 e 100 = ${Math.floor(Math.random() * 10) + 1}`)



// ----------- trunc - max - min ---------------------------

// a = parseFloat(prompt('Digite um numero'))

// document.write(`a parte inteira do numero ${a} é ${Math.trunc(a)}` )


// b = [1,4,2,7,5,46,6,5,5,6,4,9]
// document.write(`o maior numero é ${Math.max(...b)}`)
// document.write(`<br>O  menor valor da lista é ${Math.min(...b)}`)


// CONDICIONAIS

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

// --------------------------------------------

// FOR - SWITCH - TERNARIO

// --------FOR----------------

// for(var i = 0; i < 10; i++){
//     document.write(`${i}`)
// }

// for(var i = 10; i >= 0; i--){
//     document.write(`${i}`)
// }

// for(i=0;i<=20;i +=2){
// 	document.write(`<br> ${i}`)
// }

// nome = ['Maria', 'Paulo', 'Julia', 'Lucas']

// for(i = 0; i < nome.length;i++){
//     document.write(`<br> ${nome[i]}`)
// }

// length -> tamanho do vetor(sizeof)!!!!

// a = +(prompt('tabuada de que numero?'))

// for(i = 0; i < 11;i++){
//     document.write(`<br>${a} x ${i} = ${a * i}`)
// }

// for(i=0;i<=5;i++){
// 	for(j=0;j<=5;j++){
// 		document.write(`<br>${i} x ${j} = ${i * j}`)
// 	}
// }

// for(i=0;i <= 20;i++){
// 	if(i % 2 == 0){
// 		document.write(`<br>${i}`)
// 	}
// }


// var palavra = prompt('Digite uma palavra')
// palavrainvertida = ''

// for(i = palavra.length - 1; i >=0; i--){
// 	palavrainvertida += palavra[i]
// }
// document.write(`<br>Palavra original: ${palavra}, Palavra invertida: ${palavrainvertida}`)

// maiusculas e minusculas-------------------toLowerCase()-toUpperCase


// nomes = ['julia', 'maria', 'joao', 'pedro']

// for(i = 0; i < nomes.length; i++){
//     document.write(`${nomes[i].toUpperCase()} `)

        // .toLowerCase()
// }

//break -------------------------------------------

// for(i=0;i<=10;i++){
// 	document.write(`<br>${i}`)
// 	if( i >= 5){
// 		break
// 	}
// }

//continue -------------------------------------------

// for(i=0;i<=10;i++){
	// if(i == 5){
	// 	continue
	// }
	// document.write(`<br>${i}`)
// }

// SWITCH---------------------

// sexo = prompt('Digite F(feminino),M(masculino) e O (outros)')

// sexo = sexo.toLowerCase()

// switch(sexo){
//     case 'm':
// 		document.write('Masculino')
// 		break
// 	case 'f':
// 		document.write('Feminino')
// 		break
// 	case 'o':
// 		document.write('Outros')
// 		break
// 	default:
// 		document.write('Opção invalida')
// }

// --------------------------

// WHILE - DO WHILE - FUNÇÃO

// -----------WHILE-------------

// var a = 0
// while(a <= 10){
// 	document.write(`<br>${a}`)
// 	a++
// }

// var b = Number(prompt('Digite um numero até 50'))
// while(b <= 50){
// 	document.write(`<br>Numero:${b}`)
// 	b = b + 2
// }

// var c = 10
// while(c >= 0){
// 	document.write(`<br>Numero:${c}`)
// 	c-- 
// }

// n = 1

// par = impar = 0

// while(n != 0){
// 	n = +(prompt('Digite um numero'))
// 	if(n != 0){
// 		if(n % 2 == 0){
// 			par++;
// 		}
// 		else{
// 			impar++;
// 		}
// 	}
// }

// document.write(`<br>Você digitou ${par} numeros pares e ${impar} numeros impares`)


// n1 = 0
// while(n1 < 5){
// 	n1++
// 	if(n1 == 3){
// 	break
// 	}
// document.write(`<br>${n1}`)
// }

// c = Math.floor(Math.random()* 11);

// acerto = false

// palpite = 0

// while(acerto == false){
// 	j = +(prompt('Palpite'))
// 	palpite++
// 	if(j == c){
// 		acerto = true
// 	}
// }

// document.write(`<br>Legal!você acertou em  ${palpite} palpites`)
// document.write(`<br>O numero sorteado foi ${c}`)

// ----------------

// var opcao

// do{
// 	console.log('Menu de operações')
// 	console.log('1. Adição')
// 	console.log('2. Subtração')
// 	console.log('3. Multiplicação')
// 	console.log('4. Divisão')
// 	console.log('5. Sair')
	
// 	opcao = parseFloat(prompt('Escolha a operação desejada: '))
// 	if(opcao >= 1 && opcao <= 4){
// 		num1 = parseFloat(prompt('Digite o primeiro numero: '))
// 		num2 = parseFloat(prompt('Digite o segundo numero: '))
		
// 		var result
// 	switch(opcao){
// 		case 1:
// 			result = num1 + num2
// 			console.log(`Resultado: ${num1}+ ${num2} = ${result} `)
// 			break
// 		case 2:
// 			result = num1 - num2
// 			console.log(`Resultado: ${num1}- ${num2} = ${result} `)
// 			break
// 		case 3:
// 			result = num1 * num2
// 			console.log(`Resultado: ${num1}* ${num2} = ${result} `)
// 			break
// 		case 4:
// 			if(num2 != 0){
// 				result = num1 / num2
// 				console.log(`Resultado: ${num1}/${num2} = ${result} `)
// 			}else{
// 				console.log(`Erro:Divisão por zero não é permitido`)
// 			}
// 			break
// 			}
// 		break
// 	}
// 		else if(opcao == 5){
// 			console.log(`Saindo do menu.`)
// 			// break
// 		}
// 		else{
// 			console.log(`Opção invalida.`)
// 		}	
	// }while(opcao != 5) //true


	// FUNÇÃO--------------------------------------

// function mensagem(){
// 	document.write(`Mensagem`)
// }

// mensagem()
				
// function mensagem1(){
		
// 	return 'Olá Bom dia'
// }

// document.write(`${mensagem1()}`)

// function mensagem(nome){
// 	document.write(`Olá Bom dia! ${nome}`)
// }

// nome = prompt('Digite seu nome')
// mensagem(nome)

// function mensagem(nome){
// 	return `Ola Bom dia! ${nome}`
// }

// nome = prompt('Seu nome')
// document.write(`${mensagem(nome)}`)

// se tem document write na função, nao precisa repetir, só chamar função () em caso de string ou de verificação de true or false (exemplo)
// só usa document write fora da função quando usar return

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// CONTA COM FUNÇÃO----------------------------

// function soma(x,y){

// 	return x + y

// }

// x = +(prompt('Digite um numero'))
// y = +(prompt('Digite um numero'))

// document.write(`a soma é ${soma(x,y)}`)

// function soma2(x,y){

// 	document.write(`a soma é: ${x + y}`)
// }

// x = +(prompt('numero'))
// y = +(prompt('numero'))

// soma2(x,y)

// function media(m){
// 	m = (n1 + n2 + n3) / 3

// 	return m
// }

// n1 = +(prompt('n1'))
// n2 = +(prompt('n2'))
// n3 = +(prompt('n3'))


// document.write(`${media()}`) <-------------!!!!!!!!!!!!!!!!!!!!!!!!


// function par(num){
	
// 	return num % 2 == 0
// }

// num = parseFloat(prompt('Digite o valor de num: '))
// document.write(`<br>O numero é par? ${par(num)}`) <-------------!!!!!!!!!!!!!!!!!!!!!!!!

// function fatorial(n){
// 	if(n == 0 || n == 1){
// 		return 1
// 	}


// 	return n * fatorial(n - 1) <-------------!!!!!!!!!!!!!!!!!!!!!!!!
// }
// n = parseFloat(prompt('Digite o valor de numero: '))
// document.write(fatorial(n))



// VETORES

// ARRAY INICIA EM 0

// var a = new Array()
// document.write(`${a}`)
// 	document.write(`<br>O tamanho do array é ${a.length}`)

// var b = new Array(true,1,2,3,4,new Array(1,2,3),2,'a')

// // document.write(`<br> ${b}`)
// // document.write(`<br> ${b[5][2]}`)
// // document.write(`<br>${b[5]}`)

// tamamho-----------

// document.write(`${b.length}`)
// document.write(`${b[5].length}`) 


// indentifica posição

// document.write(`<br>A posição do elemento a encontra-se na posição : ${b.indexOf('a')}`)

// ultima ocorrencia 

// document.write(`<br>A ultima occotência do elemento é: ${b.lastIndexOf('2')}`)

// modo literal ----------

// var c = []
// document.write(`<br> ${c}`)
// document.write(`<br>O tamanho do array é ${c.length}`)

// var d = [true,1,2,3,4,[1,2,3],2,'a']
// document.write(`<br> ${d}`)
// document.write(`<br> ${d[0]}`)
// document.write(`<br> ${d[5][0]}`)

// -------------


// valores externos------------


// nota = []

// for(i = 0; i < 4;i++){
// 	nota[i] = +(prompt('Digite um numero')) 
// 	// nota[i] = i + 1 
	
	
// }

// document.write(`${nota}`)


// string ---------------------------


// nome = 'Thereza'

// document.write(`o nome tem ${nome.length} caracteres`)

// var e = [1,2,3,4]

// e[e.length] = 'Novo Valor'

// document.write(`<br>${e}`)


// pessoa = ['Ana', 'Liz', 'Eva', 'Flora', 'Isabel']

// for(i = 0; i < pessoa.length;i++){
// 	document.write(`<br> ${pessoa[i]}`)
// }


// Ordenação ------------------------

// reverse() -> ordem inversa

// pessoa = ['Ana','Liz','Eva','Flora','Isabel']
// document.write(`<br>${pessoa}`)
// document.write(`<br>A ordem invertida do array é : ${pessoa.reverse()}`)

// // sort() -> ordem alfabetica

// document.write(`<br>A ordem alfabetica do array é: ${pessoa.sort()}`)

// document.write(`<br>A ordem alfabetica do array é: ${pessoa.sort().reverse()}`)

// concatenação---------

// var f = [1,2,3,5]
// var g = [6,7,8]

// document.write(`<br>O vetor concatenado é :${f.concat(g)}`)
// document.write(`<br>O vetor concatenado é :${g.concat(f)}`)

//includes() -> verifica se um elemento encontras-se no array !!!!!!!! diferente do indexOf ou lastIndexOf

// var f = [1,2,3,5]
// var g = [6,7,8]


// document.write(`<br>O numero 2 encontra-se no array? ${f.includes(2)}`)
// document.write(`<br>O numero 12 encontra-se no array? ${f.includes(12)}`)

// push() -> elemento no final !!!!!!!!!

// var h = [10, 20, 30, 40]

// h.push(50)

// document.write(`<br> ${h}`)

// pop() -> remove o ultimo !!!!!!

// h.pop()

// document.write(`<br> ${h}`)

// unshift() -> adiciona no inicio

// h.unshift(0)

// document.write(`<br>O novo array é: ${h}`)

// shift() -> remove do inicio

// h.shift()

// document.write(`<br>O novo array é: ${h}`)

// slice() -> fatia a array sem alterar o original

// aluno = 'Maria da Silva Xavier da Cunha'
// a = aluno.slice(5)
// document.write(`<br>${a}`)
// a1 = aluno.slice(5,14)
// document.write(`<br>${a1}`)


// carro = ['Jeta','Fiat','Focus','Cruze','Corolla','Civic','Elantra']
// c = carro.slice(2)
// document.write(`<br>${c}`)

// c1 = carro.slice(2,3)
// document.write(`<br>${c1}`)

// c2 = carro.slice(2,5)
// document.write(`<br>${c2}`)

// c3 = carro.slice(-4,-2)
// document.write(`<br>${c3}`)

// c4 = carro.slice(-6,-3)
// document.write(`<br>${c4}`)

// email = 'exemplo@gmail.com'
// e = email.slice(email.indexOf('@') + 1)
// document.write(`<br>${e}`)

// e1 = email.slice(email.lastIndexOf('e') + 1)
// document.write(`<br>${e1}`)

// e1 = email.slice(email.lastIndexOf('e'))
// document.write(`<br>${e1}`)

// nome1 = 'Thereza'
// n1 = nome1.slice(-3)
// document.write(`<br>${n1}`)


// splice() - 1º valor: posição
			//  2º valor: quantidade de elementos excluidos
			//  3º valor: novos elementos 
			 
// d = ['Segunda','Terça','Quarta']
// d1 = d.splice(1,1)
// document.write(`<br>${d1}`)
// document.write(`<br>${d}`)

// d2 = d.splice(1,1,'Quinta','Sexta')
// document.write(`<br>${d2}`)
// document.write(`<br>${d}`)

// d3 = d.splice(1,0,'Quinta','Sexta')
// document.write(`<br>${d3}`)
// document.write(`<br>${d}`)

// nome = []
// for(i=0;i<5;i++){
// 	nome[i] = prompt('Digite o seu nome')
// }
// document.write(`<br>Nome: ${nome}`)
// n = nome.splice(2,0,'1')  <----------------------------!!!!!!!!!!!
// document.write(`<br>Nome: ${nome}`)


// FUNÇÃO DE DNV-----------------

// /Função anonima - não possui nome, atribui-se a função a uma variavel

// var msg = function(){
// 	return `Olá!Bom dia!`
// }
// document.write(`<br>${msg()}`)
// //---------------------------------------
// var msg1 = function(){
// 	return `Olá ${nome}!Bom dia!`
// }
// nome = prompt('Digite o seu nome')
// document.write(`<br>${msg1()}`)
// //---------------------------------------

// num = function(numero){
// 	return numero ** 2
// }
// numero = +(prompt('Digite um numero'))
// document.write(`<br>${num(numero)}`)


// CONTINUA FUNÇÕES--------------------

// Função every() - verifica se todods os elementos atendem as condições

// nome = ['Thereza','Eva','Flora']
// function n(elemen){
// 	return(typeof elemen == 'string')
// }

// document.write(`${nome.every(n)}`)

// numeros = [2,4,6,8]

// function numero(num){
// 	return num % 2 == 0
// }

// document.write(`${numeros.every(numero)}`)


// filter() -> filtrar elementos

// frutas = ['banana','abacaxi','uva','laranja','manga','morango']
// function f(elem){
// 	return (elem.indexOf('an') > 0)
// }
// document.write(`<br>${frutas.filter(f)}`)


// numeros = [1,2,3,4,5,6,7,8,9,10]
// impar = numeros.filter(function(n){
// 	return n % 2 != 0
// })
// document.write(`<br>Os numeros impares são: ${impar}`)

// Função map() - cria um novo vetor com os resultados da função aplicada

// var numeros2 = [1,2,3,4,5]

// dobro = numeros2.map(function(n1){
// 	return n1 * 2
// })
// document.write(`<br>O novo vetor é ${dobro}`)

// /Função reduce() - soma todos os elementos do array -------------

// numeros3 = [10,20,30,40,50]
// soma = 0
// soma = numeros3.reduce(function(t,n){
// 	return t + n
// })
// document.write(`<br>A soma de todos os elemntos do vetor é ${soma}`)

