function returnType<T>(val: T, name?: string): string {
    return 'boles';
}

console.log(returnType<number>(1));
console.log(returnType<string>("bahbouh"));
console.log(returnType<boolean>(true));
console.log(returnType<number[]>([1,2,3,4,5]));




















// function dif<boles>(val: boles): string {
//     return `the type is ${typeof val}`;
// }