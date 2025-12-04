// a) Erstelle ein Array mit Namen gemischteListe, das verschiedene Datentypen enthält (mindestens ein String, eine Zahl, ein Boolean, 
// ein Objekt mit mindestens zwei Eigenschaften, ein Array mit mindestens zwei Elementen und eine Funktion, die eine einfache Ausgabe in
//  die Konsole macht). 
const myArray= ['Nasim', 41, true, {year: 2025, month:'December'}, [11,32],  function() { console.log("Eine Funktion im Array");}]

// b) Füge dem Array gemischteListe zwei weitere Elemente hinzu: Ein weiteres Objekt und ein Datum-Objekt mit dem aktuellen Datum.
myArray.push({day:2, city:'Dresden'}); 
myArray.push(new Date()); 
console.log(myArray);

// c) Durchlaufe das Array gemischteListe mit einer Schleife deiner Wahl und gib für jedes Element den Typ (mittels typeof oder
//  einer anderen Methode, wenn nötig) in der Konsole aus. 
myArray.forEach(element => {
    console.log(`${element}: ${typeof element}`);
});

// d) Verwende die if-else oder switch Kontrollstruktur, um für jedes Element im Array eine spezielle Nachricht in der Konsole auszugeben, 
// basierend auf dem Typ des Elements (z.B. "Dies ist ein String: [Wert des Strings]"). 
myArray.forEach(element => { 
  switch (typeof element) { 
    case "string": 
      console.log(`Dies ist ein String: ${element}`); 
      break; 
    case "number": 
      console.log(`Dies ist eine Zahl: ${element}`); 
      break; 
    case "boolean": 
      console.log(`Dies ist ein Boolean: ${element}`); 
      break; 
    case "object": 
      if (Array.isArray(element)) { 
        console.log(`Dies ist ein Array: ${element}`); 
      } else if (element instanceof Date) { 
        console.log(`Dies ist ein Datum: ${element}`); 
      } else { 
        console.log(`Dies ist ein Objekt: ${JSON.stringify(element)}`); 
      } 
      break; 
    case "function": 
      console.log(`Dies ist eine Funktion`); 
      element(); 
      break; 
    default: 
      console.log("Unbekannter Typ"); 
  } 
});

// e) Entferne das letzte und das erste Element aus dem Array gemischteListe und gib das veränderte Array in der Konsole aus. 
myArray.pop(); 
myArray.shift(); 
console.log(myArray); 

// f) Erstelle eine Funktion, die ein Array als Parameter akzeptiert und die Länge des Arrays sowie die Elemente in umgekehrter 
// Reihenfolge in der Konsole ausgibt. 
 const arrLength= function(arr) {
    console.log(arr.length);
    console.log(arr.reverse().join(', '));
 }
 arrLength([5,7,6,44,5]);
 arrLength(myArray);

// g) Nutze diese Funktion, um das Array gemischteListe zu bearbeiten und das Ergebnis auszugeben.  

