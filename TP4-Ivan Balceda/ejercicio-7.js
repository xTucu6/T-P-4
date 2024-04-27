class Contacto {
    constructor(nombre, telefono) {
      this.nombre = nombre;
      this.telefono = telefono;
    }
  }
  
  class Agenda {
    constructor(tamaño = 10) {
      this.contactos = [];
      this.tamañoMaximo = tamaño;
    }
  
    añadirContacto(contacto) {
      if (this.contactos.length < this.tamañoMaximo) {
        this.contactos.push(contacto);
        console.log(`Contacto ${contacto.nombre} añadido a la agenda.`);
      } else {
        console.log("La agenda esta llena. No se puede añadir mas contactos.");
      }
    }
  
    existeContacto(contacto) {
      return this.contactos.some(c => c.nombre === contacto.nombre);
    }
  
    listarContactos() {
      console.log("Lista de contactos:");
      this.contactos.forEach(contacto => {
        console.log(`${contacto.nombre}: ${contacto.telefono}`);
      });
    }
  
    buscarContacto(nombre) {
      const contactoEncontrado = this.contactos.find(contacto => contacto.nombre === nombre);
      if (contactoEncontrado) {
        console.log(`Telefono de ${nombre}: ${contactoEncontrado.telefono}`);
      } else {
        console.log(`No se encontro ningun contacto con el nombre ${nombre}.`);
      }
    }
  
    eliminarContacto(contacto) {
      const indice = this.contactos.findIndex(c => c.nombre === contacto.nombre);
      if (indice !== -1) {
        this.contactos.splice(indice, 1);
        console.log(`Contacto ${contacto.nombre} eliminado de la agenda.`);
      } else {
        console.log(`No se encontro ningun contacto con el nombre ${contacto.nombre}.`);
      }
    }
  
    agendaLlena() {
      return this.contactos.length >= this.tamañoMaximo;
    }
  
    huecosLibres() {
      return this.tamañoMaximo - this.contactos.length;
    }
  }
  
  function menu() {
    const agenda = new Agenda();
    let opcion;
    do {
      opcion = prompt(`Seleccione una opcion:
      1. Añadir contacto
      2. Verificar existencia de contacto
      3. Listar contactos
      4. Buscar contacto por nombre
      5. Eliminar contacto
      6. Verificar si la agenda esta llena
      7. Verificar huecos libres
      8. Salir`);
  
      switch (opcion) {
        case "1":
          const nombre = prompt("Ingrese el nombre del contacto:");
          const telefono = prompt("Ingrese el telefono del contacto:");
          agenda.añadirContacto(new Contacto(nombre, telefono));
          break;
        case "2":
          const nombreVerificar = prompt("Ingrese el nombre del contacto a verificar:");
          console.log(agenda.existeContacto(new Contacto(nombreVerificar)));
          break;
        case "3":
          agenda.listarContactos();
          break;
        case "4":
          const nombreBuscar = prompt("Ingrese el nombre del contacto a buscar:");
          agenda.buscarContacto(nombreBuscar);
          break;
        case "5":
          const nombreEliminar = prompt("Ingrese el nombre del contacto a eliminar:");
          agenda.eliminarContacto(new Contacto(nombreEliminar));
          break;
        case "6":
          console.log(agenda.agendaLlena() ? "La agenda esta llena." : "La agenda no esta llena.");
          break;
        case "7":
          console.log(`Huecos libres en la agenda: ${agenda.huecosLibres()}`);
          break;
        case "8":
          console.log("Saliendo del menu...");
          break;
        default:
          console.log("Opcion no valida. Por favor, seleccione una opcion valida.");
      }
    } while (opcion !== "8");
  }
  
  menu();
  