let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


/*
//Exercício 01

for(index = 0;index<numbers.length;index++){

    console.log(numbers[index]);

}
*/

/*
//Exercício 02
let aux = 0;

for(index = 0;index<numbers.length;index++){
    aux+=numbers[index];
}

console.log(aux);
*/

/*
// Execício 03
let aux = 0;

for(index = 0;index<numbers.length;index++){
    aux+=numbers[index];
}

console.log(aux/numbers.length);
*/

/*
// Exercício 04
let aux = 0;

for(index = 0;index<numbers.length;index++){
    aux+=numbers[index];
}

if(aux/numbers.length>20){
    console.log("Valor maior que 20");
} else{
    console.log("Valor menor que 20");
}
*/

// Exercício 05
let maior = numbers[0];
for(index = 0;index<numbers.length;index++){
    if(maior<numbers[index]){
        maior = numbers[index];
    }   
}
console.log(maior);