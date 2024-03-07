
var name2 = prompt("What is your name?");

// Display a greeting message with the entered name
alert("Hello, " + name2 + "! Welcome to JavaScript!"); 
 
 // Function to add two numbers
  function add(x, y) {
    return x + y;
  }

  // Function to subtract two numbers
  function subtract(x, y) {
    return x - y;
  }

  // Function to multiply two numbers
  function multiply(x, y) {
    return x * y;
  }

  // Function to divide two numbers
  function divide(x, y) {
    return x / y;
  }

  // Get user input for numbers and operation
  var num1 = parseFloat(prompt("Enter the first number:"));
  var num2 = parseFloat(prompt("Enter the second number:"));
  var operation = prompt("Enter the operation u wants to perform (+, -, *, /):");

  // Perform the calculation based on the operation
  var result;

  switch (operation) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = subtract(num1, num2);
      break;
    case "*":
      result = multiply(num1, num2);
      break;
    case "/":
      result = divide(num1, num2);
      break;
    default:
      result = "Invalid operation";
  }

  // Display the result
  alert("Result: " + result);

