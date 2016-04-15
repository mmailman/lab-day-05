function sum(num1, num2) {
  var sumEl = document.getElementById('sumEl');
  sumEl.textContent = 'The sum of ' + num1 + ' and ' + num2 + ' is ' + (num1 + num2) + '.';
  return num1 + num2;
}

function multiply(num1, num2) {
  var multiplyEl = document.getElementById('multiplyEl');
  multiplyEl.textContent = 'The product of ' + num1 + ' and ' + num2 + ' is ' + (num1 * num2) + '.';
  return num1 * num2;
}

function sumAndMultiply(num1, num2, num3) {
  var sumAndMultiplyEl = document.getElementById('sumAndMultiplyEl1');
  document.getElementById('sumAndMultiplyEl2');
  var add = sum(sum(num1, num2), num3);
  var product = multiply(multiply(num1, num2), num3);
  sumAndMultiplyEl1.textContent = num1 + ' and ' + num2 + ' and ' + num3 + ' sum to ' + add + '.';
  sumAndMultiplyEl2.textContent = 'The numbers ' + num1 + ' and ' + num2 + ' and ' + num3 + ' have a product of ' + product + '.';
  return [add, product];
}

function sumArray(array) {
  var sumArrayEl =  document.getElementById('sumArrayEl');
  var sum = array[0] + array[1] + array[2];
  console.table(array);
  sumArrayEl.textContent = array[0] + ',' + array[1] + ',' + array[2] + ' was passed in as an array of numbers, and ' + sum + ' is their sum.';
}

function multiplyArray(array) {
  var multiplyArrayEl = document.getElementById('multiplyArrayEl');
  var product = array[0] * array[1] * array[2];
  console.table(array);
  multiplyArrayEl.textContent = 'The numbers ' + array[0] + ',' + array[1] + ',' + array[2] + ' have a product of ' + product + '.';
}
