function main(a = 2, b = 3, c) {
  var sumResult = sum(a, b);
  if (typeof c === "function") {
    return c(sumResult);
  }
  return sumResult;
}

function sum(a, b) {
  return a + b;
}

document.write(main());
