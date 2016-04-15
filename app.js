//The sum and multply functions are very dry to the point of readability my be a bit difficult.
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

//Looking good
function sumAndMultiply(num1, num2, num3) {
  var sumAndMultiplyEl = document.getElementById('sumAndMultiplyEl1');
  document.getElementById('sumAndMultiplyEl2');
  var add = sum(sum(num1, num2), num3);
  var product = multiply(multiply(num1, num2), num3);
  sumAndMultiplyEl1.textContent = num1 + ' and ' + num2 + ' and ' + num3 + ' sum to ' + add + '.';
  sumAndMultiplyEl2.textContent = 'The numbers ' + num1 + ' and ' + num2 + ' and ' + num3 + ' have a product of ' + product + '.';
  return [add, product];
}

//The sumArray function here is ver brittle, it will break if there is an array that is smaller or larger than 3. I would use a for loop here.
function sumArray(array) {
  var sumArrayEl =  document.getElementById('sumArrayEl');
  var sum = array[0] + array[1] + array[2];
  console.table(array);
  //One thing I found out is that if you just use the array variable you will get the formatting the way specified.
  sumArrayEl.textContent = array[0] + ',' + array[1] + ',' + array[2] + ' was passed in as an array of numbers, and ' + sum + ' is their sum.';
}

//See the comment for sumArray it applies here as well.
function multiplyArray(array) {
  var multiplyArrayEl = document.getElementById('multiplyArrayEl');
  var product = array[0] * array[1] * array[2];
  console.table(array);
  multiplyArrayEl.textContent = 'The numbers ' + array[0] + ',' + array[1] + ',' + array[2] + ' have a product of ' + product + '.';
}
