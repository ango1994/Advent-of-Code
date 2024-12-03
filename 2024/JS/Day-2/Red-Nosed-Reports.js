import { data } from "./data.js";

const reports = data.split("\n");

const formatedReports = reports.map((report) =>
  report.split(/\s+/).map(Number)
);

const removeNumber = (arr, index) => {
  const newArr = [...arr];
  newArr.splice(index, 1);
  console.log(newArr);
};

const checkNumbersOrder = (report) => {
  const isDescending = report[0] > report[1] ? true : false;
  for (let x = 0; x < report.length; x++) {
    if (isDescending) {
      if (
        report[x] <= report[x + 1] ||
        report[x] - report[x + 1] > 3 ||
        report[x] - report[x + 1] < 1
      ) {
        removeNumber(report, x);
      }
    } else {
      if (
        report[x] >= report[x + 1] ||
        report[x + 1] - report[x] > 3 ||
        report[x + 1] - report[x] < 1
      ) {
        removeNumber(report, x);
      }
    }
  }
  return true;
};

const app = () => {
  const result = formatedReports.map((report) => checkNumbersOrder(report));
  const final = result.filter((x) => x === true);
  console.log(final.length);
};

app();
