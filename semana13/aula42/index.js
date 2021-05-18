"use strict";
let minhaString = 'Minha String';
let meuNumero = 137;
var CORES;
(function (CORES) {
    CORES["VERMELHO"] = "vermelho";
    CORES["LARANJA"] = "laranja";
    CORES["AMARELO"] = "amarelo";
    CORES["VERDE"] = "verde";
    CORES["AZUL"] = "azul";
    CORES["ANIL"] = "anil";
    CORES["VIOLETA"] = "violeta";
})(CORES || (CORES = {}));
let pessoa1 = {
    nome: 'Anderson',
    idade: 29,
    corFavorita: CORES.AZUL
};
let pessoa2 = {
    nome: 'Yoda',
    idade: 900,
    corFavorita: CORES.VERDE
};
let pessoa3 = {
    nome: 'Gandalf',
    idade: 3021,
    corFavorita: CORES.ANIL
};
let pessoa4 = {
    nome: 'Meliodas',
    idade: 3000,
    corFavorita: CORES.AMARELO
};
console.log(pessoa1);
//# sourceMappingURL=index.js.map