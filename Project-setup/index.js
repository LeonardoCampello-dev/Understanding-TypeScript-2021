function combine(firstInput, secondInput, resultConvertion) {
    var result;
    if ((typeof firstInput === "number" && typeof secondInput === "number") ||
        resultConvertion === "as-number") {
        result = +firstInput + +secondInput;
    }
    else {
        result = firstInput.toString() + secondInput.toString();
    }
    return result;
}
var combinedAges = combine(20, 21, "as-number");
console.log(combinedAges);
var combinedStringAges = combine("20", "21", "as-number");
console.log(combinedStringAges);
var combinedNames = combine("Leonardo", "Bianca", "as-text");
console.log(combinedNames);
