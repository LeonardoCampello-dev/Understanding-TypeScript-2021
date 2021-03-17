function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result ", num);
}

function addAndHandle(x: number, y: number, cb: (num: number) => void) {
  const result = x + y;
  cb(result);
}

printResult(add(5, 5));

let combinedValues: (x: number, y: number) => number;

combinedValues = add;

console.log(combinedValues(3, 4));

addAndHandle(10, 20, (result) => {
  console.log(result);
  return result;
});
