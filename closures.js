function nums() {
    let a = 2;
    console.log({a});

function add() {
        const b = 3;
        console.log({sum: a + b});
    }
    add();
}

nums();


function numbers() {
    let d = 5;
    console.log({d});
    function addNum(){
        let e = 7;
        console.log(d+e);
    }
    addNum()
}
numbers()