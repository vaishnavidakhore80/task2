const display = document.getElementById('display');
let currentInput = ''; // Stores the current input

// Add event listener to all buttons
document.querySelectorAll('.buttons button').forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'Clr') {
      currentInput = ''; // Clear the input
    } else if (value === '=') {
      try {
        currentInput = eval(currentInput); // Evaluate the expression
      } catch (error) {
        currentInput = 'Error'; // Handle invalid input
      }
    } else {
      currentInput += value; // Add button value to the input
    }

    display.textContent = currentInput; // Update the display
  });
});
