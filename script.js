
function generateCodes(input, maxLength) {
    const codes = new Set();
    const string = input.trim();
  
    function permute(current, remaining, maxLength) {
      // Base case - permutation is added to the codes set
      if (current.length === maxLength) {
        codes.add(current.toUpperCase());
        return;
      }
      
      // Loop through characters and concatenate to create permutations
      for (let i = 0; i < remaining.length; i++) {
        if (remaining[i] === " ") {
          continue;
        }
        const newCurrent = current + remaining[i];
        // Only generate codes starting with first letter
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
console.log(generateCodes("  Magnolia Gardens  ", 3));
