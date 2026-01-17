function lastLetter(expression) {
  return expression.at(2);
}

function capitalize(expression) {
  return expression.at(0).toUpperCase() + expression.slice(1);
}

console.log(lastLetter("abcd"));
console.log(capitalize("abcd"));
