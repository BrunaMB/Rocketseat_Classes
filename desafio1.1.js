const nome = 'Carlos';
const peso = 84;
const altura = 1.88;
const imc= peso/ (altura*altura);

if (imc>=30){

    console.log ( nome + ' voce está acima do peso')
} else {

    console.log ( nome + ' voce não esta acima do peso')
}