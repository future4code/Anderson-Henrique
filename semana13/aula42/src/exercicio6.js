var eras;
(function (eras) {
    eras["PRE_HISTORICA"] = "Pr\u00E9-Historica";
    eras["ANTIGA"] = "Idade Antiga";
    eras["MEDIA"] = "Idade M\u00E9dia";
    eras["MODERNA"] = "Idade Moderna";
    eras["CONTEMPORANEA"] = "Idade Contempor\u00E2nea";
})(eras || (eras = {}));
var idadeHistorica = function (ano, tempo) {
    if (!tempo || tempo === 'DC') {
        if (ano >= 0 && ano < 476) {
            return eras.ANTIGA;
        }
        else if (ano >= 476 && ano < 1453) {
            return eras.MEDIA;
        }
        else if (ano >= 1453 && ano < 1789) {
            return eras.MODERNA;
        }
        else if (ano >= 1789 && ano < 2021) {
            return eras.CONTEMPORANEA;
        }
        else {
            console.log("Valor de ano superior ao ano de 2021 DC, digite um valor menor, ou um ano com tempo AC ( Antes de Cristo )");
        }
    }
    else if (tempo === 'AC') {
        if (ano >= 4000 && ano <= 100000) {
            return eras.PRE_HISTORICA;
        }
        else if (ano > 0 && ano < 4000) {
            return eras.ANTIGA;
        }
        else {
            console.log('valor digitado inválido ou superior a 100000. Digite AC para antes de Cristo e um valor até 100000');
        }
    }
    else {
        console.log('Passe um valor válido para o ano( entre 0 e 100000) e o tempo( ou AC ou DC )');
    }
};
var resultadoTeste = idadeHistorica(2999, "AC");
console.log(resultadoTeste);
// }
