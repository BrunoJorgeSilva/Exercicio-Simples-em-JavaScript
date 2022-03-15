/* Exercício Prático: 
Crie uma função que recebe dois números como parâmetro. 
Confira se os números são iguais. 
Confira se a soma dos números é maior que 10 ou menor que 20. 
Retorne uma String dizendo Os numeros num1 e num2 não/são iguais. Sua soma é soma, que é maior /menor que 

*/ 

function comparador() {
    
    let n1 = Number(prompt('Insira o primeiro número:'));
    let n2 = Number(prompt('Insira o segundo número:')); 

    if (n1 == n2) {
    alert('os números são iguais');
    }
    else {
        alert('Os números são diferentes');
    }
    
    if(n1 + n2 > 10) { 
        alert('E a soma dos dois números é maior que 10')
    }
    else {
        alert('E a soma deles é menor que 10')
    }
    if (n1 + n2 > 20) {
        alert (' E também é maior que 20')

    }
    else {
        alert ('e também é menor ou igual a 20!')
    }
        

   

}
comparador(); 