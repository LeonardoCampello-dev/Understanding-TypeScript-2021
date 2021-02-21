function sumNumbers(
  x: number,
  y: number,
  printResult: boolean,
  resultMessage: string
) {
  const sum = x + y;

  if (printResult) {
    console.log(resultMessage + sum);
  }

  return x + y;
}

const numberX = 3;
const numberY = 9;
const printResult = true;
const resultMessage = "Result is: ";

const sumResult = sumNumbers(numberX, numberY, printResult, resultMessage);
