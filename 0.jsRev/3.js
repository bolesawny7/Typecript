//functions

function funOne() {
    console.log("HelloOne");
}

// funOne();

var funTwo = () => {
    console.log("HelloTwo");
}
// funTwo();
let a = "10";
let b = 20;

var add = (x,y) => {
    console.log(x+y);
}

//add(a,b);

var addReturn = (x,y) => {
    return x+y;
}

let x = addReturn(a,b);

console.log(x);




