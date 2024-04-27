class Auto {
    constructor(color, marca, modelo) {
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
        this.encendido = false;
    }
    encender() { 
        if(this.encendido) {
            this.encendido = true;
            console.log("El auto esta encendido");
        }
        else {
            console.log("El auto ya esta encendido");
        }
}
apagar() {
    if(this.encendido) {
        this.encendido = false;
        console.log("El auto esta apagado");
    }
    else {
        console.log("El auto ya esta apagado");
    }
}
}
let miAuto = new Auto("rojo", "Chevrolet", "Camaro");
console.log("Color:", miAuto.color);
console.log("Marca:", miAuto.marca);
console.log("Modelo:", miAuto.modelo);

miAuto.encender();
miAuto.apagar();
miAuto.encender();