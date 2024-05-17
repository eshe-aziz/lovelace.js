const internship = true;
const ourPromise = new Promise((resolve, reject)=>{
    if(internship){
        resolve('I made it')
    }else{
        reject('Pray for me')
    }
})
// console.log(ourPromise);
// CHAINING
ourPromise
.then(()=>{
    // SUCCESS
    console.log('I will be confirmed');
}).catch(()=>{
    // REJECT
    console.log('I will continue applying for jobs');
}).finally(()=>{
    // EITHER
    console.log('I will still be successfull');
});
// console.log({ourPromise});
const successWish = async()=>{
try{
    console.log('My successful wish');
}catch{
    console.log('My wish is not successful');
}
}
successWish();
