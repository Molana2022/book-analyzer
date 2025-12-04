// a) Definition des Objekts filmSammlung 

const filmSammlung = { 
  film1: { 
    titel: "Inception", 
    jahr: 2010, 
    genre: "Science-Fiction", 
    info: function() { 
      return `Der Film ${this.titel} aus dem Jahr ${this.jahr} gehört zum Genre ${this.genre}.`; 
    } 
  }, 
  film2: { 
    titel: "Interstellar", 
    jahr: 2014, 
    genre: "Science-Fiction", 
    info: function() { 
      return `Der Film ${this.titel} aus dem Jahr ${this.jahr} gehört zum Genre ${this.genre}.`; 
    } 
  } 
}; 
 

// b) Ausgabe der Informationen jedes Films 

for (let film in filmSammlung) { 
  console.log(filmSammlung[film].info()); 
} 
 

// c) Hinzufügen und Ausführen der Methode alter 

filmSammlung.alter = function() { 
  for (let film in this) { 
    if (typeof this[film] === "object") { 
      let filmAlter = 2023 - this[film].jahr; 
      console.log(`Der Film ${this[film].titel} ist ${filmAlter} Jahre alt.`); 
    } 
  } 
}; 
 
filmSammlung.alter(); 