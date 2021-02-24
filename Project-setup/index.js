function combine(firstInput, secondInput) {
    var result;
    if (typeof firstInput === "number" && typeof secondInput === "number") {
        result = firstInput + secondInput;
    }
    else {
        result = firstInput.toString() + secondInput.toString();
    }
    return result;
}
var combinedAges = combine(20, 21);
console.log(combinedAges);
var combinedNames = combine("Leonardo", "Bianca");
console.log(combinedNames);
