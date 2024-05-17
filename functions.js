function add (num1, num2){
    const sum = num1 + num2;
    //console.log({console: sum});
    return {'return': sum}
}

console.log(add(2,3));
//add(4,5);



// Function Expressions
const subtraction = function (num1, num2){
    console.log(num1-num2);
}

subtraction(20,10);

// Arrow Functions
const multiply = (num1, num2) => console.log(num1 * num2);
multiply(5, 6);

// IIFEs
(function (){
    console.log('Hello');
})();

// Hoisting- call a variable a function before you have declared it

console.log({greet});

var greet = 'Hello there';
console.log({greet2: greet});






