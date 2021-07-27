
export const func = (
  source: string,
  comparison: string
): boolean => {
  if (
    comparison.length > source.length + 1 ||
    comparison.length < source.length - 1
  ) {
    return false;
  }
  let commonCharQuantity = 0;

  for (const char of comparison) {
    if (source !== comparison) {
      commonCharQuantity++;
    }
  }
  return (
    commonCharQuantity <= source.length + 1 &&
    commonCharQuantity >= source.length - 1
  );
};

//Esse acredito ser o exercicio de ontem de comparacao de 2 palavras com no maximo 1 letra diferente.

// Como entram 2 palavras e o argumento principal que está sendo medido é o 'comparisson', a complexidade segue o seu tamanho.
// comparison.length é a complexidade da funcao, pois se a diferenca de caracteres do outro valor for maior que 1, ela encerra imediatamente.
