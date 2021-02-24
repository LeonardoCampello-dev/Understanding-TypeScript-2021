function combine(firstInput: number | string, secondInput: number | string) {
  let result: number | string;

  if (typeof firstInput === "number" && typeof secondInput === "number") {
    result = firstInput + secondInput;
  } else {
    result = firstInput.toString() + secondInput.toString();
  }

  return result;
}

const combinedAges = combine(20, 21);
console.log(combinedAges);

const combinedNames = combine("Leonardo", "Bianca");
console.log(combinedNames);
