export const replaceMatrixValue = (
    matrix: number[][],
    rowIndex: number,
    columnIndex: number,
    value: number
  ): void => {
    if (
      matrix[rowIndex] === undefined ||
      matrix[rowIndex][columnIndex] === undefined
    ) {
      throw new Error("Fora do intervalo da matriz");
    }
  
    matrix[rowIndex][columnIndex] = value;
  };
// Pelo gabarito ,a complexidade é 1, mas eu penso na resposta mais como a propria capacidade de matriz,sendo X linhas vs Y colunas, =  X*Y; 
// pagina 16 do notion do dia: https://firebasestorage.googleapis.com/v0/b/apolo-f4.appspot.com/o/classSlides%2FAula%2065%20-%20Complexidade%20de%20Algoritmos.pdf?alt=media&token=c428a052-9fdf-41af-969f-1d234caf32bd