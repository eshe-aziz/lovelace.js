function Person (name, age){
    this.name = name;
    this.age = age;
    this.greet = function(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
    }
};

const adam = new Person('Adam', 30); //new keyword is used to create and initialize an object from a constructor

console.log({adam});
adam.greet();

const eve = new Person('Eve', 25);
console.log({eve});
eve.children = ['Cain', 'Abel', 'Seth']
console.log({eve});
console.log({adam});

Person.prototype.skinColor = 'black';
console.log('skin-color',adam.skinColor);