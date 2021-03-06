type NumberOrString = number | string;
type ConversionDescriptor = "as-text" | "as-number";

function combine(
  firstInput: NumberOrString,
  secondInput: NumberOrString,
  resultConvertion: ConversionDescriptor
) {
  let result: number | string;

  if (
    (typeof firstInput === "number" && typeof secondInput === "number") ||
    resultConvertion === "as-number"
  ) {
    result = +firstInput + +secondInput;
  } else {
    result = firstInput.toString() + secondInput.toString();
  }

  return result;
}

const combinedAges = combine(20, 21, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("20", "21", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Leonardo", "Bianca", "as-text");
console.log(combinedNames);
