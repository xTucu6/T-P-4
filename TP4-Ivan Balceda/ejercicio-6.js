class Libro {
    constructor(ISBN, titulo, autor, numPaginas) {
      this._ISBN = ISBN;
      this._titulo = titulo;
      this._autor = autor;
      this._numPaginas = numPaginas;
    }
  
    get ISBN() {
      return this._ISBN;
    }
  
    get titulo() {
      return this._titulo;
    }
  
    get autor() {
      return this._autor;
    }
  
    get numPaginas() {
      return this._numPaginas;
    }
  
    set ISBN(ISBN) {
      this._ISBN = ISBN;
    }
  
    set titulo(titulo) {
      this._titulo = titulo;
    }
  
    set autor(autor) {
      this._autor = autor;
    }
  
    set numPaginas(numPaginas) {
      this._numPaginas = numPaginas;
    }
  
    mostrarLibro() {
      console.log(`El libro ${this.titulo} con ISBN ${this.ISBN} creado por el autor ${this.autor} tiene ${this.numPaginas} páginas.`);
    }
  }
  
  const libro1 = new Libro("978-3-16-148410-0", "Cien años de soledad", "Gabriel García Márquez", 432);
  const libro2 = new Libro("978-3-16-148411-0", "El Señor de los Anillos", "J.R.R. Tolkien", 1178);
  
  libro1.mostrarLibro();
  libro2.mostrarLibro();
  
  if (libro1.numPaginas > libro2.numPaginas) {
    console.log(`${libro1.titulo} tiene más páginas que ${libro2.titulo}.`);
  } else if (libro1.numPaginas < libro2.numPaginas) {
    console.log(`${libro2.titulo} tiene más páginas que ${libro1.titulo}.`);
  } else {
    console.log(`${libro1.titulo} y ${libro2.titulo} tienen el mismo número de páginas.`);
  }
  