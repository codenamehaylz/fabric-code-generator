
function generateCodes(string, maxLength) {
    const codes = new Set();
  
    function permute(current, remaining, maxLength) {
      if (current.length === maxLength) {
        codes.add(current.toUpperCase());
        return;
      }
  
      for (let i = 0; i < remaining.length; i++) {
        const newCurrent = current + remaining[i];
        if (newCurrent[0] === string[0]) {
          const newRemaining = remaining.slice(0, i) + remaining.slice(i + 1);
          permute(newCurrent, newRemaining, maxLength);
        }
      }
    }
  
    permute('', string, maxLength);
  
    return codes;
  }
  
  // Example usage:
console.log(generateCodes("Magnolia Gardens", 3));
