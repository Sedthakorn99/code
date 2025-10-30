const display = document.getElementById('display');
let lastInput = '';

function appendToDisplay(value) {
  // ไม่ให้ใส่ operator ซ้ำ เช่น ++ หรือ */
  const operators = ['+', '-', '*', '/', '%'];
  if (operators.includes(value) && operators.includes(lastInput)) return;

  display.value += value;
  lastInput = value;
}

function clearDisplay() {
  display.value = '';
  lastInput = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
  lastInput = display.value.slice(-1);
}

function calculateResult() {
  try {
    let result = eval(display.value);
    if (!isFinite(result)) throw new Error('Error');
    display.value = result;
  } catch {
    display.value = 'Error';
  }
}
