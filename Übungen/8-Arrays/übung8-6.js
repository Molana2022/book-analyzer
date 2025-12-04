// a) Erstelle eine Klasse Buch, die Eigenschaften wie titel, autor, veröffentlichungsjahr und genre besitzt. 
// Der Konstruktor der Klasse soll alle diese Eigenschaften initialisieren. 

// b) Füge der Klasse Buch eine Methode beschreibung hinzu, die eine Zeichenkette zurückgibt, welche den Titel, 
// den Autor, das Veröffentlichungsjahr und das Genre des Buches in einem schönen Satz zusammenfasst. 

// c) Erstelle ein Array bibliothek, das mehrere Instanzen der Klasse Buch enthält. Nutze verschiedene Genres und 
// Veröffentlichungsjahre. 

// d) Schreibe eine Funktion sucheNachGenre, die als Parameter ein Genre annimmt und alle Bücher dieses Genres aus 
// dem Array bibliothek in der Konsole ausgibt. Verwende dazu eine Schleife. 

// e) Implementiere eine Funktion neuestesBuch, die das Buch mit dem neuesten Veröffentlichungsjahr aus dem Array 
// bibliothek findet und dessen Beschreibung mithilfe der Methode beschreibung in der Konsole ausgibt.  


class Buch {
    constructor(titel, autor, veröffentlichungsjahr, genre) {
        this.titel= titel;
        this.autor= autor;
        this.veröffentlichungsjahr= veröffentlichungsjahr;
        this.genre= genre;
    }
    beschreibung() {
        return `Das Buch ${this.titel} von ${this.autor}`
    }
}

let bibliothek = [
    new Buch('bbb', 'neuesBuchchch', 2020, 'Roman'),
    new Buch('ff', 'ffffffffffff', 1999, 'Roman'),
    new Buch('nnn', 'fsfddfdffgdfasd', 1900, 'Krimi')
];

function sucheNachGenre(genre) {
    bibliothek.forEach(buch => {
        if (buch.genre === genre) {
            console.log(buch.beschreibung())
        }
    });
}
//sucheNachGenre('Roman');

function neuestesBuch() {
    let neuestesBuch= bibliothek[0];
    bibliothek.forEach(buch => {
        if (buch.veröffentlichungsjahr > neuestesBuch.veröffentlichungsjahr) {
            neuestesBuch= buch;
        }
    })
    console.log(neuestesBuch.beschreibung());
}

neuestesBuch();