/**
 * Created by Lula on 3/29/2017.
 */

String.prototype.repeatify = String.prototype.repeatify || function(num){
  "use strict";
  let newString = "";
  while(num >0){
    newString +=this;
    num--;
  }
  return newString;
};

const b ="Brown";
console.log(b.repeatify(3));
