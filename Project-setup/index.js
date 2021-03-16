function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result ", num);
}
printResult(add(5, 5));
var combinedValues;
combinedValues = add;
console.log(combinedValues(3, 4));
