class Mitarbeiter{
    constructor(name, alter, abteilung, jahresgehalt) {
        this.name= name;
        this.alter= alter;
        this.abteilung= abteilung;
        this.jahresgehalt= jahresgehalt;
    }
    Beschreibung() {
        return `${this.name} von Abteilung ${this.abteilung} `
    }
}

let mitarbeiterListe= [];

function mitarbeiterHinzufuegen(mitarbeiter) {
    mitarbeiterListe.push(mitarbeiter);
}


function mitarbeiterAktualisieren(name, neuesJahresgehalt) { 
  const mitarbeiter = mitarbeiterListe.find(mitarbeiter => mitarbeiter.name === name); 
  if (mitarbeiter) { 
    mitarbeiter.jahresgehalt = neuesJahresgehalt; 
  } 
} 

// d) Implementiere eine Funktion durchschnittsGehaltBerechnen, die das durchschnittliche Jahresgehalt
//  innerhalb einer bestimmten Abteilung berechnet. 
function durchschnittsGehaltBerechnen(abteilung) { 
  const abteilungsMitarbeiter = mitarbeiterListe.filter(mitarbeiter => mitarbeiter.abteilung === abteilung); 
  const gesamtgehalt = abteilungsMitarbeiter.reduce((summe, mitarbeiter) => summe + mitarbeiter.jahresgehalt, 0); 
  return gesamtgehalt / abteilungsMitarbeiter.length; 
} 
 
// e) Implementiere eine Funktion mitarbeiterFiltern, die Mitarbeiter nach einem spezifischen Kriterium filtert 
// (z.B. alle Mitarbeiter über 30 Jahre). 
function mitarbeiterFiltern(kriterium) { 
  return mitarbeiterListe.filter(kriterium); 
} 
mitarbeiterFiltern(mitarbeiter => mitarbeiter.alter > 30  );
// f) Verwende die Array.prototype.sort-Methode, um die Mitarbeiter nach ihrem Jahresgehalt in aufsteigender 
// Reihenfolge zu sortieren.  
mitarbeiterListe.sort((a, b) => a.jahresgehalt - b.jahresgehalt); 


  


mitarbeiterHinzufuegen('sss', 35, 'HR', 2022);
mitarbeiterAktualisieren('sss', 65, 'HR', 2022);

console.log(mitarbeiterDaten);
