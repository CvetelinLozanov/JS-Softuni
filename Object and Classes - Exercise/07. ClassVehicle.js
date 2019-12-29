
class Vehicle{
    constructor (type, model, parts, fuel) {
        this.type = type;
        this.model = model;
        this.parts = parts;  
        this.parts.quality = this.parts.engine * this.parts.power;     
        this.fuel = fuel;
    }
    drive(fuelToDecrease) {
        this.fuel -= fuelToDecrease;
    }
}


