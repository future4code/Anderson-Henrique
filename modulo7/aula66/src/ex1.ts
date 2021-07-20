const findFirstRecurringCharacter = (input) => {
    const charHashMap = {};
    for (const char of input) {
      if (charHashMap[char] === true) {
        return char;
      }
      charHashMap[char] = true;
    }
    return null;
  };

  // a complexidade varia de acordo com o tamanho da entrada do input, sendo 6, se for garmin, 3 se for asa....
  // Basicamente a complexidade e input.length

  