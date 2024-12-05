import fs from "fs";

let input = fs.readFileSync("./input.txt").toString();

const WORD_FIND = "XMAS";
input = input.split(/\r?\n/).map((arr) => arr.split(""));
console.log(input);

const makeRowWord = (line, index, secondIndex) => {
  let string = "";
  for (let i = 0; i < WORD_FIND.length; i++) {
    string += input[index][secondIndex + i];
  }

  return string;
};

const makeColumnWord = (input, line, index, secondIndex) => {
  let string = "";
  for (let i = 0; i < WORD_FIND.length; i++) {
    string += input[index + i] && input[index + i][secondIndex];
  }
  return string;
};

const makeDescendingDiagonalWord = (input, line, index, secondIndex) => {
  let string = "";
  for (let i = 0; i < WORD_FIND.length; i++) {
    string += input[index + i] && input[index + i][secondIndex + i];
  }
  return string;
};

const makeAscendingDiagonalWord = (input, line, index, secondIndex) => {
  let string = "";
  for (let i = 0; i < WORD_FIND.length; i++) {
    string += input[index - i] && input[index - i][secondIndex + i];
  }
  console.log(string);
  return string;
};

const checkWord = (word) => {
  return word === WORD_FIND || word.split("").reverse().join("") === WORD_FIND
    ? true
    : false;
};

const app = () => {
  let total = 0;
  input.forEach((line, index) => {
    line.forEach((letter, secondIndex) => {
      const result = makeRowWord(line, index, secondIndex);
      checkWord(result) && total++;

      const secondResult = makeColumnWord(input, line, index, secondIndex);
      checkWord(secondResult) && total++;

      const thirdResult = makeDescendingDiagonalWord(
        input,
        line,
        index,
        secondIndex
      );
      checkWord(thirdResult) && total++;

      const fourthResult = makeAscendingDiagonalWord(
        input,
        line,
        index,
        secondIndex
      );
      checkWord(fourthResult) && total++;
    });
  });
  console.log(total);
};

app();
