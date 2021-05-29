export const isPangram = (string) => {
  let alphabet = "";
  string = string.toLowerCase();

  for (const letter of string) {
    if (letter >= "a" && letter <= "z") {
      if (!alphabet.includes(letter)) {
        alphabet += letter;
      }
    }
  }
  if (alphabet.length === 26) return true;
  else return false;
};