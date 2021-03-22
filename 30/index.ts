let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Leonardo Campello";

if (typeof userInput === "string") {
  userName = userInput;
}

function generateErrors(message: string, code: number): never {
  throw { message, errorCode: code };
}

generateErrors("Not found!", 400);
