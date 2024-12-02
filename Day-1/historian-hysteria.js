import {data} from "./data.js"

const lines = data.split('\n');

const newData = lines.map(line => line.split(/\s+/).map(Number));

const left = newData.map(left => Number(left[0]))
const right = newData.map(right => Number(right[1]))

let counter = 0

left.sort((a, b) => a - b)
right.sort((a, b) => a - b)

console.log(left)
console.log(right)

for(let i = 0; i < left.length; i++) {
    if(left[i] >= right[i]){
    counter += left[i] - right[i]
    } else {
      counter += right[i] - left[i]
  }
}

console.log(counter)

