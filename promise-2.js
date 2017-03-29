/**
 * Created by Lula on 3/26/2017.
 */


let calculationPromise = new Promise(function(resolve, reject){
  "use strict";
  setTimeout(function(){
    "use strict";
    resolve(1+1);
  }, 1000 )
});

calculationPromise.then(function(value){
  "use strict";
  return value+2;
}).then(function(value){
  "use strict";
  console.log(value);
});