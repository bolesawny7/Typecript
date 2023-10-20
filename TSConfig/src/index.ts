class Car {
    public model: string
    private speed:number
    public price:number
    constructor(model:string) {
        this.model = model;
    }
    carInfo() {
        console.log(this.model);
    }
    setCarSound(sound: string) {
        console.log(sound)
    }
}

let islam = require('./')