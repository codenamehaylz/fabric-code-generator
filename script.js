
function generateCodes(string, maxLength) {
    const codes = new Set();
  
    function permute(current, remaining, maxLength) {
      if (current.length === maxLength && current[0] === string[0]) {
        codes.add(current.toUpperCase());
        return;
      }
  
      for (let i = 0; i < remaining.length; i++) {
        const newCurrent = current + remaining[i];
        const newRemaining = remaining.slice(0, i) + remaining.slice(i + 1);
        permute(newCurrent, newRemaining, maxLength);
      }
    }
  
    permute('', string, maxLength);
  
    return codes;
  }
  
  // Example usage:
console.log(generateCodes("Charlotte", 3));
