//too many parameters
// let getPersonInfo = (name,age,eyeColor,)

interface Person {
    name: String,
    age: number,
    //the ? is to make this key optional
    eyeColor?: string
}




let ahmed: Person = {
    name: "ahmed",
    age: 123
}

let getPersonInfo = (person: Person) => {
    console.log(`${person.name}, ${person.age}, ${person.eyeColor}`)
}

getPersonInfo({
    name: "Ahmed",
    age: 123,
    eyeColor: "bateekha"
})