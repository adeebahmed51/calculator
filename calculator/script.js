let input = document.getElementById('display'); // Get the input element
let currentInput = ""; // Holds the current input string
let memory = ""; // Optional: you can use memory if you decide to implement memory functionality later

// Select all buttons
let buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let buttonText = e.target.innerHTML;

        if (buttonText === '=') {
            try {
                // Evaluate the expression and update the input field
                currentInput = eval(currentInput);
                input.value = currentInput;
            } catch (error) {
                // Handle any errors (e.g., invalid expressions)
                input.value = 'Error';
                currentInput = "";
            }
        } else if (buttonText === 'C') {
            // Clear the input field
            currentInput = "";
            input.value = currentInput;
        } else {
            // Append the button's text to the current input string
            currentInput += buttonText;
            input.value = currentInput;
        }
    });
});
