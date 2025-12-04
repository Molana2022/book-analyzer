function verwalteFilmSammlung() { 
  let filme = []; 
 // a) Hinzufügen eines neuen Films. 
  function hinzufuegen(titel, jahr, genre, bewertung) { 
    filme.push({titel, jahr, genre, bewertung}); 
  } 

// b) Aktualisieren der Bewertung eines Films durch den Titel. 
function aktualisieren(titel, neueBewertung) { 
const film = filme.find(film => film.titel === titel); 
    if (film) { 
        film.bewertung = neueBewertung; 
    } else { 
        console.log("Film nicht gefunden."); 
    } 
} 
// c) Löschen eines Films durch den Titel. 
function loeschen(titel) { 
    filme = filme.filter(film => film.titel !== titel); 
  } 
// d) Anzeigen aller Filme in der Konsole, sortiert nach dem Jahr der Veröffentlichung. 
function anzeigen() { 
const sortierteFilme = filme.sort((a, b) => a.jahr - b.jahr); 
console.log("Filmsammlung:", sortierteFilme); 
} 
// e) Suchen eines Films durch den Titel und Anzeigen der Details in der Konsole. 
function suchen(titel) { 
    const film = filme.find(film => film.titel === titel); 
    if (film) { 
      console.log("Gefundener Film:", film); 
    } else { 
      console.log("Film nicht gefunden."); 
    } 
  } 
 
  return {hinzufuegen, aktualisieren, loeschen, anzeigen, suchen}; 
}


const meineFilmSammlung = verwalteFilmSammlung(); 

meineFilmSammlung.hinzufuegen("Der Herr der Ringe", 2001, "Fantasy", 5); 

meineFilmSammlung.hinzufuegen("Inception", 2010, "Sci-Fi", 4.5); 

meineFilmSammlung.aktualisieren("Inception", 5); 

meineFilmSammlung.loeschen("Der Herr der Ringe"); 

meineFilmSammlung.anzeigen(); 

meineFilmSammlung.suchen("Inception"); 