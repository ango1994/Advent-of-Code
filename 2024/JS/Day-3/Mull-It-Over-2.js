import { data } from "./data.js";

const mul = (a, b) => {
  return a * b;
};

const operations = data.match(
  /(do\(\))|(mul\([0-9]+,[0-9]+\))|(don\'t()\(\))/g
);

const getCleanOperations = (operations) => {
  let flag = false;
  const operationsToReturn = [];
  operations.forEach((operation) => {
    if (operation === "don't()") flag = true;
    if (operation === "do()") flag = false;
    else if (flag === false && operation !== "do()") {
      operationsToReturn.push(operation);
    }
  });
  return operationsToReturn;
};

const cleanOperations = getCleanOperations(operations);

const operationResults = cleanOperations.map((operation) => {
  return eval(operation);
});

const result = operationResults.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(result);
