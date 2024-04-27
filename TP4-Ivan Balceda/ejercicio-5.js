class Persona {
    constructor(nombre, edad, dni, sexo, peso, altura, añoNacimiento) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.añoNacimiento = añoNacimiento;
}

mostrarGeneracion() {
    let generacion = "";
    if (this.añoNacimiento >= 1930 && this.añoNacimiento <= 1948){
        generacion = "Silent Generation";
    }
    else if (this.añoNacimiento >= 1949 && this.añoNacimiento <= 1968){
        generacion = "Baby Room";
    }
    else if (this.añoNacimiento >= 1969 && this.añoNacimiento <= 1980){
        generacion = "Generation X";
    }
    else if (this.añoNacimiento >= 1981 && this.añoNacimiento <= 1993){
        generacion = "Generation Y";
    }
    else if (this.añoNacimiento >= 1994 && this.añoNacimiento <= 2010){
        generacion = "Generation Z";
    }
    console.log(`La persona pertenece a la ${generacion}.`);
}

esMayorDeEdad() {
    return this.edad >=18;
}

mostrarDatos() {
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Edad: ${this.edad}`);
    console.log(`DNI: ${this.dni}`);
    console.log(`Sexo: ${this.sexo}`);
    console.log(`Peso: ${this.peso}`);
    console.log(`Altura: ${this.altura}`);
    console.log(`Generación: ${this.mostrarGeneracion()}`);
    console.log(`Es mayor de edad: ${this.esMayorDeEdad()}`);
}

generaDni() {
    return math.floor(math.random() * 100000000);
}
}

let persona = new Persona("Ivan", 28, 38744136, "H", 95, 1.80, 1995);

persona.mostrarGeneracion()

if (persona.esMayorDeEdad()) {
    console.log("Es mayor de edad");
} else {
    console.log("No es mayor de edad");
}

console.log("Datos de la persona:");

persona.mostrarDatos();