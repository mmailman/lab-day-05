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
