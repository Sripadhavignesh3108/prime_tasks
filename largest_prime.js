// FINDING THE LARGEST PRIME NUMBER IN GIVEN NUMBER
// -------------------------------------------------
const prompt = require("prompt-sync")();
let num = prompt("enter a number : ");
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
  }
}
if(max==0 || max==1){
    console.log("There is no Prime number Exists in given Number")
}
else
console.log(`${max} is a Largest Prime number`);
