function sumNumbers(x, y, printResult, resultMessage) {
    var sum = x + y;
    if (printResult) {
        console.log(resultMessage + sum);
    }
    return x + y;
}
var numberX = 3;
var numberY = 9;
var printResult = true;
var resultMessage = "Result is: ";
var sumResult = sumNumbers(numberX, numberY, printResult, resultMessage);
