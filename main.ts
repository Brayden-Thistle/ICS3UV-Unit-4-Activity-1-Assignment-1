/**
 * @author Brayden Thistle
 * @version 1.0.0
 * @date 2025-12-18
 * @fileoverview this program will calculate the average of someones grades
 */

//
const MarkAmounts = Number(prompt("How many marks will you enter?"));
let mark: number;
let total1: number = 0;

for (let MarkCount = 1; MarkCount <= MarkAmounts; MarkCount++) {
  mark = Number(prompt("Enter a mark:"));
  total1 = total1 + mark;
}
//average 
const average = total1 / MarkAmounts;

//printing out the total
console.log(`You have entered ${MarkAmounts} marks. The students average is ${average.toFixed(2)}%.`);

//if else statements to decide if the student is failing or not
if (total1 < 50) {
  console.log("the student is failing")
} else if (total1 <= 50 && total1 < 70) {
  console.log("the student's performance is just under average.");
} else if (total1 <= 70 && total1 < 80) {
  console.log("The students performance is average");
} else {
  console.log("The student is on the honour roll");
}

console.log("\nDone.");
