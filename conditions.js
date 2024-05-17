function personAge(age){
    if(age > 18) {
        return "You are an adult"
    }
    else if (age >= 12 && age <= 18) {
    return "You are a teenager";
    }
    else {
        return "You are underage";
    }
}
console.log((personAge(13)));