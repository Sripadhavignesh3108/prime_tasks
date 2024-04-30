// FINDING THE LARGEST NON-PRIME NUMBER IN GIVEN NUMBER
// -----------------------------------------------------
const prompt = require("prompt-sync")();
num = prompt("enter a number : ");
largest=0;
for(n of num)
{
  if(n>1){
   c=true;
    for(i=2;i<num.length;i++)
     {
      if(n%i==0)
       {
        if(n>largest)
         {
          largest=n;
          c=false;
          break;
         }
       }
     }
  }
}
console.log(`largest non prime number in given number : `,largest)