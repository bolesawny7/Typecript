
let fun= (x,y,callback) => {
    console.log(x+y);
    console.log("One");
    callback();
    console.log("Three");
}
let fun2 = () => {
    console.log("Two");
}

//fun(10,20,fun2)

let funOne = (x,y) => {
    setTimeout(() => {
        console.log(x+y);
    }, 1000);
    console.log("One");
}
funOne(10,20);






