import {data} from "./data.js"

const lines = data.split('\n');

const newData = lines.map(line => line.split(/\s+/).map(Number));

const left = newData.map(left => Number(left[0]))
const right = newData.map(right => Number(right[1]))

let counter = 0

left.sort((a, b) => a - b)
right.sort((a, b) => a - b)

for(let i = 0; i < left.length; i++) {
    if(left[i] >= right[i]){
    counter += left[i] - right[i]
    } else {
      counter += right[i] - left[i]
  }
}

console.log(counter)

let secondCounter = 0;

const secondLeft = newData.map(left => Number(left[0]))
const secondRight = newData.map(right => Number(right[1]))

secondLeft.forEach((num) => {
  let countInside = 0
  secondRight.forEach((secondNum) => {
    if(num === secondNum){
    countInside++
    }
  })
  secondCounter += num * countInside
})

console.log(secondCounter)





