function sumNumbers(x: number, y: number) {
  // Bad implementation, we can solve this easily with TypeScript.
  // if (typeof x !== "number" || typeof y !== "number") {
  //   throw new Error("Incorrect input!");
  // }

  return x + y;
}

const numberX = 5;
const numberY = 2.5;

const sumResult = sumNumbers(numberX, numberY);

console.log(sumResult);

// TypeScript verification errors only at development time.
