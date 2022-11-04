// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
// The sum of these multiples is 23.
// PROBLEM - Find the sum of all the multiples of 3 or 5 below 1000.
let sum = 0;
for (let index = 0; index < 1000; index++) {
   const divBy5 = index%5;

   const divBy3 = index%3;
   if(divBy5 === 0 || divBy3 === 0){
       console.log("divBy3", index, divBy3);
       sum = sum + index;
   }
}
console.log(sum)