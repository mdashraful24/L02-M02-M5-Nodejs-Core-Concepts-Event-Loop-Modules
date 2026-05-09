// IIFE - Immediately Invoked Function Expression
// var = global scope
// let = block scope

(()=>{
    let a = 1;
    console.log(a);
})();

(() => {
    let a = 2;
    console.log(a);
})();
