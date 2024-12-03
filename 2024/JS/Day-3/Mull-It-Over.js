import {data} from './data.js'

const mul = (a, b) => {
  return a*b
}

const operations = data.match(/mul\([0-9]+,[0-9]+\)/g);

const operationResults = operations.map((operation) => {
  return eval(operation)
})

const result = operationResults.reduce((accumulator, currentValue) => {return accumulator + currentValue}, 0)

console.log(result)
