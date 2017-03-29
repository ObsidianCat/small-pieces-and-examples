const array1 = [1,4,6,10,20,21];
function findThreeNumbers(arr, num){
  "use strict";
  while(arr.length>0){
    const currentNum = arr.shift();
    for(let j = 0; j< arr.length; j++){
      const sumOfTwo = currentNum+arr[j];
        for(let k = 0; k< arr.length; k++){
          if(k === j){break;}
          const sumOfThree = sumOfTwo + arr[k];
          if(sumOfThree === num){
            console.log(num + '_____________');
            console.log(currentNum, arr[j], arr[k]);
            return true;
          }
        }
    }
  }
  console.log("There is no such combination of number");
  return false;
}

findThreeNumbers(array1, 32);
findThreeNumbers(array1, 444);