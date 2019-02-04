function sumFor(list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i];
  }
  return sum;
}

function sumWhile(list) {
  let sum = 0;
  let i = 0;
  while (i < list.length) {
    sum += list[i];
    i++;
  }
  return sum;
}

function sumRecursion(list, int) {
  if (int <= 0) {
    return 0;
  }
  return sumRecursion(list, int - 1) + list[int - 1];
}

function sumTheSimpleWay(list) {
  return _.reduce(list, function (memo, index) { return memo + index; }, 0);
}

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(sumFor(list));
console.log(sumWhile(list));
console.log(sumRecursion(list, list.length));
console.log(sumTheSimpleWay(list));
