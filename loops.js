const multiplyByTwo = (num) => {
    let newArray = [];

    for(let i = 0 ; i < num.length; i++){
        const result = num[i] * 2;
        newArray.push(result);
    }
    return newArray;
}

console.log(multiplyByTwo([2,3,4,5,6,7]));

//For...of
const totalSum = (num) => {
let sum = 0;
for(let element of num){
    sum += element;
}
return sum;
}

console.log(totalSum([1,2,3,4,5,6,7,8]))



// while loop
const teachStudents = (students) =>{
    while(students.length > 2){
        console.log('Teach students');
       // students.pop();

        // if(students.includes('John')){
        //     continue;
        // }

        if(students.includes('Anita')){
            break;
        }
    }
}

teachStudents(['Max', 'Anita', 'John'])



/// Do while- does the condtition then executes next

const childrenNames = (children) => {
    do{
        console.log('There are many children')
    }
    while(children.length > 5)
}

childrenNames(['Max', 'Anita', 'John', 'Evans', 'Monica'])


//switch statement- do conditions you want to check for
const checkDayOfTheWeek = (day) => {
    switch(day){
        case 'Monday':
            console.log('Today is Monday');
            break;

            case 'Tuesday':
            console.log('Today is Tuesday');
            break;
            
            default:
            console.log('The day is not listed');
    }
}

checkDayOfTheWeek('Monday')














