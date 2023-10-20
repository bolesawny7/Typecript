class Car {
    model;
    speed;
    price;
    constructor(model) {
        this.model = model;
    }
    carInfo() {
        console.log(this.model);
    }
    setCarSound(sound) {
        console.log(sound);
    }
}
