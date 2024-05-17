function greet(userName, callback){
    console.log(`Hello there ${userName}`);
    callback()
};
// TAKES IN THE CALLBACK
function intro(){
    console.log('This is me');
}
greet('Helen', intro);

setTimeout(intro, 5000);

const interval = () =>{
    console.log('Execute me');
}
setInterval(interval, 3000)