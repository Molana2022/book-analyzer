const mitarbeiter = [ 
  {name: "Max Mustermann", position: "Entwickler", startDatum: "2018-07-01", gehalt: 50000}, 
  {name: "Erika Musterfrau", position: "Projektmanager", startDatum: "2019-06-15", gehalt: 55000}, 
  {name: "Sandra Beispiel", position: "Designer", startDatum: "2020-05-01", gehalt: 48000} 
]; 

function berechneDurchschnittsgehalt(mitarbeiterArray) { 
  const gesamtgehalt = mitarbeiterArray.reduce((summe, mitarbeiter) => summe + mitarbeiter.gehalt, 0); 
  const durchschnitt = gesamtgehalt / mitarbeiterArray.length; 
  console.log(`Das durchschnittliche Gehalt beträgt: ${durchschnitt} Euro.`); 
} 
 // c) Nutze die Array.prototype.sort() Methode, um die Mitarbeiter basierend auf ihrem Startdatum, vom ältesten zum neuesten, 
 // zu sortieren. Gib das sortierte Array auf der Konsole aus. 
mitarbeiter.sort((a,b) => new Date(a.startDatum)- new Date(b.startDatum));
console.log(mitarbeiter);

// d) Konvertiere das Mitarbeiter-Array in einen JSON-String und speichere diesen in einer Variablen. Verwende 
// JSON.stringify() für die Konvertierung. 
const mitarbeiterString= JSON.stringify(mitarbeiter);
const mitarbeiterJson = JSON.stringify(mitarbeiter); 

console.log("Mitarbeiter als JSON-String:", mitarbeiterJson); 

// e) Parse den JSON-String zurück in ein JavaScript-Objekt. Verwende JSON.parse() und speichere das Ergebnis in 
// einer neuen Variablen. Überprüfe, ob das ursprüngliche Array und das geparste Objekt identisch sind, indem du 
// das Ergebnis auf der Konsole ausgibst.  
const mitarbeiterObj= JSON.parse(mitarbeiterJson);

console.log("Überprüfung der Identität:", JSON.stringify(mitarbeiter) === JSON.stringify(mitarbeiterObj)); 

console.log(JSON.stringify(mitarbeiter) , JSON.stringify(mitarbeiterObj)); 
