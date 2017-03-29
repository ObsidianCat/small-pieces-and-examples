console.log('It is promises example');
const promiseExample = (time)=>{
  new Promise((resolve)=>{
    "use strict";
    setTimeout(resolve, time);
  });
};
//
// promiseExample(1000).then(()=>{console.log("Cat")});



const wait = time => new Promise((resolve) => setTimeout(resolve, time));

wait(3000).then(() => console.log('Hello!')); // 'Hello!'
