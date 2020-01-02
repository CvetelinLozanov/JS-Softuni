class Laptop{
    constructor(info, quality) {
        this.info = info;
        this.isOn = false;
        this.quality = Number(quality);
    }

    get price() {
        return (800 - (this.info.age * 2)) + (this.quality * 0.5)
    }

    turnOn(){
        if (this.isOn === false) {
            this.quality--;
        }
        if (this.quality === 0){
            this.qualiti = 0;
        }
        
        return this.isOn = true;
    }

    turnOff(){
        if (this.isOn === true) {
            this.quality--;
        }
        if (this.quality === 0){
            this.qualiti = 0;
        }
        return this.isOn = false;
    }

    showInfo() {
        console.log(JSON.stringify(this.info))
    }
}

let info = {producer: "Dell", age: 2, brand: "XPS"}
let laptop = new Laptop(info, 10)
let info1 = {producer: "HP", age: 3, brand: "X2"}
let laptop1 = new Laptop(info1, 10);
console.log(laptop1.showInfo());
laptop.turnOn()
console.log(laptop.showInfo())
laptop.turnOff()
console.log(laptop.quality)
laptop.turnOn()
console.log(laptop.isOn)
console.log(laptop.price)
