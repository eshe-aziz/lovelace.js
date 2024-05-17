let fruits = ['Mango', 'Apple', 'Banana', 'Orange'];

let array = new Array(20,30,6,7);

console.log({fruits});
console.log({array});

fruits[1]=3;
console.log({fruits});
console.log('length', fruits.length);


// Array Methods

//adding the last item in an array
let addLast = fruits.push('Kiwi');
console.log({fruits});

//adding the first item in an array
let addFirst = fruits.unshift('Pawpaw');
console.log({fruits});

//removing the last item in an array
let removeLast = fruits.pop();
console.log({fruits});

//removing the first item in an array
let removeFirst = fruits.shift();
console.log({fruits})

//Reduce- adding all items in an array
let items = [20,30,40,50,60];

let add = items.reduce((acc, curr) => acc + curr)
console.log({add});

//Map- multiplies an item in an array times 2
let multiply = items.map(item => item * 2);
console.log({multiply});


//forEach
let addEach = items.forEach(item => {
    const add = item + 2;
    console.log({add});

});
console.log({addEach});console.log({addEach});

//Add each item by 2 and return an array
//let addEach = [];
//items.forEach((item) => {
//const add = item + 2;
//console.log({ add });
//addEach.push(add);
//total += item
//});

//console.log({addEach});
//console.log({total});


let multiplyAll = 1;

items.map(item => {
    multiplyAll *= item;
    return item
})

console.log({multiplyAll});

//Array Destructuring
let [num1, num2, num3] = items;
console.log({num1});
console.log({num2});
console.log({num3});


let [num1, num2, num3, ... rest] = items;
console.log({num1});
console.log({num2});
console.log({num3});
console.log({rest});





