// let a:number
var b;
var num1 = Number(process.argv[2]);
var num2 = Number(process.argv[3]);
var operacao = function (operacao, n1, n2) {
    if (operacao === 'soma') {
        return n1 + n2;
    }
    else if (operacao === 'subtracao') {
        return n1 - n2;
    }
    else if (operacao === 'multiplicacao') {
        return n1 * n2;
    }
    else if (operacao === 'maiorNumero') {
        if (n1 > n2) {
            return n1;
        }
        else {
            return n2;
        }
    }
    else {
        console.log('Nome da operacao incorreta. Digite 1 das opcoes a seguir: \n soma \n subtracao \n multiplicacao  \n maiorNumero');
    }
};
var testete = operacao('maiorNumero', 3, 14);
console.log(testete);
// let soma = function(n1:number,n2:number) : number {
// }
// let subtracao = function(n1:number,n2:number) : number {
// }
// let multiplicacao = function(n1:number,n2:number) : number {
// }
// let maiorNumero = function(n1:number,n2:number) : number {
// }
