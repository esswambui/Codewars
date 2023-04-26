// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Using a For Loop
function sum (numbers) {
    "use strict";
    let sumArr = 0;

    if (numbers){
        for (let i=0; i<numbers.length; i++){
            sumArr += numbers[i]; 
        }
        return sumArr
    }else{
        return 0;
    }
       
};

c

//Using the Refuce Method
function sum(numbers) {
    "use strict";
    return numbers.reduce((a, b) => a + b, 0);
  }