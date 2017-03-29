/**
 * Created by Lula on 3/25/2017.
 */
const getSecret = (secret) => {
  return {
    get: () => secret
  };
};

const mySecret = getSecret(3);
console.log(mySecret.get());

console.log('for loop with var counter');
for(var j =0; j< 10; j++){
  (function(k){setTimeout( function(){
      "use strict";
      console.log(k);
    },1000);
  })(j);
}

console.log('for loop with let counter');
for(let j =0; j< 10; j++){
  setTimeout( function(){
    "use strict";
    console.log(j);
  },1000);
}