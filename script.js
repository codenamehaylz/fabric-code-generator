const generateCodes = (input, maxLength) => {
    const codes = new Set();
    const string = input.trim();
  
    const permute = (current, remaining, maxLength) => {
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
  

const inputForm = document.getElementById("input-form");
const resultsList = document.getElementById("results-list");
const error = document.getElementById("error");

inputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  resultsList.innerHTML = "";
  let userInput = document.getElementById("input-string");
  if (userInput.value.trim() != "" && userInput.value.trim().length >= 3) {
    const codes = generateCodes(userInput.value, 3);
    codes.forEach((code) => {
      let listItem = document.createElement("li");
      listItem.textContent = code;
      resultsList.appendChild(listItem);
    });
    error.textContent = "";
    userInput.value = "";
  } else {
    error.textContent = "Please enter a word or phrase of at least 3 characters.";
    userInput.value = "";
  }
});