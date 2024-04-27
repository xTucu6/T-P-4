class Producto{
constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
}

imprimeDatos() {
    console.log(`Codigo: ${this.codigo}, Nombre: ${this.nombre}, Precio: ${this.precio}`);
}
}

let Productos = [
    new Producto(1, "Laptop", 1000),
    new Producto(2, "Tablet", 2000),
    new Producto(3, "Mouse", 3000),
    new Producto(4, "Teclado", 4000),
    new Producto(5, "Monitor", 5000),
];

console.log("Datos de los Productos");
Productos.forEach(Producto => {
    Producto.imprimeDatos();
}
);