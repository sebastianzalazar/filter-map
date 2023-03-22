let arreglo = [33,34,45,53,32,34,54];

console.log("FOR EACH")

arreglo.forEach(element => {
    console.log(element);
});

console.log("ARREGLO FILTRO PARES");

let pares = arreglo.filter(par => par % 2 == 0)

console.log(pares);

console.log("ARREGLO MAP");

let multiplo = arreglo.map(numero => numero*2);

console.log(multiplo);