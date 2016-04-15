function sum(num1, num2) {
  //console.log('The sum of ' + num1 + ' and ' + num2 + ' is ' + (num1 + num2) + '.');
  return num1 + num2;
}

function multiply(num1, num2) {
  //console.log('The product of ' + num1 + ' and ' + num2 + ' is ' + (num1 * num2) + '.');
  return num1 * num2;
}

function sumAndMultiply(num1, num2, num3) {
  var add = sum(sum(num1, num2), num3);
  var product = multiply(multiply(num1, num2), num3);
  console.log(num1 + ' and ' + num2 + ' and ' + num3 + ' sum to ' + add + '.');
  console.log('The numbers ' + num1 + ' and ' + num2 + ' and ' + num3 + ' have a product of ' + product + '.');
  return [add, product];
}

function sumArray(array) {
  var sum = array[0] + array[1] + array[2];
  console.table(array);
  console.log(array[0] + ',' + array[1] + ',' + array[2] + ', was passed in as an array of numbers, and ' + sum + ' is their sum.');
}

function multiplyArray(array) {
  var product = array[0] * array[1] * array[2];
  console.table(array);
  console.log('The numbers ' + array[0] + ',' + array[1] + ',' + array[2] + ' have a product of ' + product + '.');
}
