import { importInput } from "../helpers/import-input.js";

let input = importInput(import.meta.url).split('\n')

const generateInputArrays = () => {
  let firstArray = input.slice(0, input.findIndex((i) => i === '')) 
  let secondArray = input.slice(input.findIndex((i) => i === '')).filter(x => x !== '')
  
  firstArray = firstArray.map(element => element.split('|'));

  secondArray = secondArray.map(element => {
   return element.split(',')
  });

  return [firstArray, secondArray]
}

const checkUpdate = (update, rules) => {
  for (let i = 0; i < update.length; i++) {
    for (let x = i+1; x < update.length; x++) {
      const firstNumber = update[i]
      const secondNUmber = update[x]
      for (let rule of rules) {
       if (rule[1] === firstNumber && rule[0] === secondNUmber) {     
        return true 
} 
      }; 
    } 
  }
  return false
}

const app = () => {
  const [orderRules, updates] = generateInputArrays()
  let final = 0;
  const result = updates.map((update) => {
    if(!checkUpdate(update, orderRules)){
    return update
  }  
})
 const getMiddleNumber = (arr) => {
   return  arr[Math.round((arr.length - 1) / 2)]
}

  result.forEach(element => {
    if(element) final += Number(getMiddleNumber(element))
  });
console.log(final)
}

app()



