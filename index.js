function appendToDisplay(input){
  display.value += input;
}

function clearDisplay(){
  display.value = "";
}

function calculate(){
  try{
      // display.value = eval(display.value); be careful when using eval cuz ppl can execute scripts
      display.value = Function('return ' + display.value)(); // Use Function constructor to evaluate the expression
  }
  catch(error){
      display.value = "Error";
  }
}

function backspace(){
  if (display.value != '')
    {
    display.value= display.value.slice(0,-1)
    }
}

function appendSign() {
  const display = document.getElementById('display'); // Get the display input element
  if (display.value !== '') { // Check if the display is not empty
    if (display.value.charAt(0) === '-') { // If the first character is a minus sign
      display.value = display.value.slice(1); // Remove the first character (minus sign)
    } else { // If the first character is not a minus sign
      display.value = '-' + display.value; // Prepend a minus sign to the display value
    }
  }
}

function convertToPercent() {
  const display = document.getElementById('display');
  if (display.value !== '') {
    const value = parseFloat(display.value); // Convert the display value to a float
    display.value = (value / 100).toString(); // Divide the value by 100 and update the display
  }
}