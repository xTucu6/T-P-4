class Cuenta {
    constructor(titular) {
        this.titular = titular;
        this.saldo = 0;
    }

    ingresar(cantidad) {
        this.saldo += cantidad;
    }

    extraer(cantidad) {
        if (cantidad <= this.saldo) {
            this.saldo -= cantidad;
        } else {
            console.log("No hay suficiente saldo en la cuenta.");
        }
    }

    informar() {
        return `Titular: ${this.titular}, Saldo: ${this.saldo}`;
    }
}

let cuenta = new Cuenta("Alex");

console.log("Descripción inicial de la cuenta:");
console.log(cuenta.informar());

cuenta.ingresar(100);

console.log("\nDescripción después de ingresar dinero:");
console.log(cuenta.informar());

cuenta.extraer(50);

console.log("\nDescripción después de extraer dinero:");
console.log(cuenta.informar());
