// REV 2

// 1 - a
// 2 - a
// 3 - c
// 4 - a.push(8)
// 5 - c
// 6 - unshift
// 7 - b
// 8 - d

distancia = +(prompt('Digite a distancia'))
let valor 

switch(true){
    case (distancia <= 100):
        valor = distancia * 10
        break
    case (distancia >= 101 && distancia <= 300):
        valor = distancia * 8
        break
    case (distancia > 300):
        valor = distancia * 6
        break
}

document.write(`${valor}`)