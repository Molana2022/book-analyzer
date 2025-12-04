// Definiere eine globale Variable besucherZaehler, die zu Beginn den Wert 0 hat. 
// b) Erstelle eine Funktion besucherHinzufuegen, die einen Parameter anzahl akzeptiert. 
// Diese Funktion soll anzahl zum globalen besucherZaehler hinzufügen und den neuen Wert von besucherZaehler in der Konsole ausgeben. 
// Implementiere eine Kontrollstruktur innerhalb der Funktion besucherHinzufuegen, die überprüft, ob der neue besucherZaehler-Wert größer als 10 ist.
//  Wenn ja, soll eine lokale Variable status mit dem Wert "voll" erstellt und in der Konsole ausgegeben werden. 
//  Andernfalls soll status den Wert "offen" erhalten und ebenfalls ausgegeben werden. 

let besucherZaehler= 0;

function besucherHinzufuegen(anzahl) {
    besucherZaehler+=anzahl;
    if (besucherZaehler >= 20) resetBesucherZaehler();
    let status= besucherZaehler >10 ? 'voll': 'offen';
    return status
}

// e) Erstelle eine weitere Funktion resetBesucherZaehler, die den globalen besucherZaehler wieder auf 0 setzt und eine Bestätigung in der Konsole ausgibt. 
function resetBesucherZaehler() {
    besucherZaehler = 0;
    return console.log('Besucherzähler wurde zurückgesetzt.');
}

console.log('status:', besucherHinzufuegen(10));
console.log('status:', besucherHinzufuegen(22));

// f) Füge eine Bedingung hinzu, die die resetBesucherZaehler Funktion aufruft, wenn der besucherZaehler größer oder gleich 20 ist, 
// nachdem besucherHinzufuegen aufgerufen wurde. 

// g) Kommentiere deinen Code, um die Logik hinter den einzelnen Schritten zu erläutern.