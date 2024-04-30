// SUM OF LARGEST AND SMALLEST PRIME NUMBERS IN GIVEN NNUMBER
// ------------------------------------------------------------
const prompt = require("prompt-sync")();
let num=prompt("enter a number :");
// num = prompt("enter a number : ");
let min=9;
let max = 0;
let num1=true;
for (n of num) {
  if (n > 1) 
  num1 = true;
  {
    for (i = 2; i < n; i++) {
      if (n % i == 0) {
        num1 = false;
        break;
      }
    }
    if (num1) {
      if (max < n) max = n;
    }
    if(num1){
      if(min>n) min=n;
    }
  }
}
console.log(`The sum of largest [${max}] and smallest [${min}] Prime numbers is : `,Number(max)+Number(min))

