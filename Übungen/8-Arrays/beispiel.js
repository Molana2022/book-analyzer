class Buch { 
  constructor(titel, autor, veröffentlichungsjahr, genre) { 
    this.titel = titel; 
    this.autor = autor; 
    this.veröffentlichungsjahr = veröffentlichungsjahr; 
    this.genre = genre; 
  } 
 
  beschreibung() { 
    return `${this.titel} von ${this.autor}, veröffentlicht im Jahr ${this.veröffentlichungsjahr}, ist ein spannendes Werk im Genre ${this.genre}.`; 
  } 
} 
 
const bibliothek = [ 
  new Buch("Die Unendliche Geschichte", "Michael Ende", 1979, "Fantasy"), 
  new Buch("Der Schwarm", "Frank Schätzing", 2004, "Science-Fiction"), 
  new Buch("Die Verwandlung", "Franz Kafka", 1915, "Klassiker"), 
  new Buch("1984", "George Orwell", 1949, "Dystopie") 
]; 

function sucheNachGenre(genre) { 
  for (let buch of bibliothek) { 
    if (buch.genre === genre) { 
      console.log(buch.beschreibung()); 
    } 
  } 
} 


function neuestesBuch() { 
  let neuestes = bibliothek[0]; 
  for (let buch of bibliothek) { 
    if (buch.veröffentlichungsjahr > neuestes.veröffentlichungsjahr) { 
      neuestes = buch; 
    } 
  } 
  console.log(neuestes.beschreibung()); 
} 




// -----------------------------------------
class Mitarbeiter { 
  constructor(name, alter, abteilung, jahresgehalt) { 
    this.name = name; 
    this.alter = alter; 
    this.abteilung = abteilung; 
    this.jahresgehalt = jahresgehalt; 
  } 
 
  vorstellen() { 
    console.log(`Mein Name ist ${this.name}, ich bin ${this.alter} Jahre alt und arbeite in der Abteilung ${this.abteilung}.`); 
  } 
} 

 

// b) Funktion mitarbeiterHinzufuegen: 

let mitarbeiterListe = []; 
 
function mitarbeiterHinzufuegen(mitarbeiter) { 
  mitarbeiterListe.push(mitarbeiter); 
} 

 

// c) Funktion mitarbeiterAktualisieren: 

function mitarbeiterAktualisieren(name, neuesJahresgehalt) { 
  const mitarbeiter = mitarbeiterListe.find(mitarbeiter => mitarbeiter.name === name); 
  if (mitarbeiter) { 
    mitarbeiter.jahresgehalt = neuesJahresgehalt; 
  } 
} 

// d) Funktion durchschnittsGehaltBerechnen: 

function durchschnittsGehaltBerechnen(abteilung) { 
  const abteilungsMitarbeiter = mitarbeiterListe.filter(mitarbeiter => mitarbeiter.abteilung === abteilung); 
  const gesamtgehalt = abteilungsMitarbeiter.reduce((summe, mitarbeiter) => summe + mitarbeiter.jahresgehalt, 0); 
  return gesamtgehalt / abteilungsMitarbeiter.length; 
} 
 