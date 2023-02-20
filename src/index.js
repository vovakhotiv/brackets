module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const openingBrackets = [];
  const closingBrackets = [];
  const matchingBrackets = {};

  for (let i = 0; i < bracketsConfig.length; i++) {
    const config = bracketsConfig[i];
    openingBrackets.push(config[0]);
    closingBrackets.push(config[1]);
    matchingBrackets[config[1]] = config[0];
  }

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (openingBrackets.includes(char)) {
      if (matchingBrackets[char] !== char) {
        stack.push(char);
      } else {
        if (stack[stack.length - 1] === char) {
          stack.pop();
        } else {
          stack.push(char);
        }
      }
    } else if (closingBrackets.includes(char)) {
      const matchingOpeningBracket = matchingBrackets[char];
      if (stack.length === 0 || stack[stack.length - 1] !== matchingOpeningBracket) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.length === 0;
}

