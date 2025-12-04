// a) Definiere ein Array gemischteElemente, das verschiedene Datentypen enthält (mindestens einen String, eine Zahl
// , ein Boolean, ein Objekt mit mindestens zwei Eigenschaften, eine Funktion, die eine einfache Berechnung
//  durchführt, und ein weiteres Array mit mindestens drei Elementen). 
let gemischteElemente=['Nasim', 55, false, {id:1, name:'Frontend'}, (a => a+2), [2,'Green', 88]]
 
// b) Füge dem Array gemischteElemente am Ende zwei neue Elemente hinzu: einen weiteren String und eine Zahl. 
// Verwende dafür die Methode push(). 
gemischteElemente.push('Monday', 2025);

// c) Entferne das erste Element des Arrays und speichere es in einer Variablen erstesElement. 
const erstesElement= gemischteElemente.shift();

// d) Erstelle eine for-Schleife, die über das Array gemischteElemente iteriert und für jedes Element seinen 
// Typ in der Konsole ausgibt. 
gemischteElemente.forEach(element => {
    console.log( `${element}: ${typeof element}`);
});
for (let i = 0; i < gemischteElemente.length; i++) { 
  console.log(typeof gemischteElemente[i]); 
} 
// e) Definiere eine Funktion findeStrings, die das Array gemischteElemente durchläuft und alle Elemente, 
// die Strings sind, in einem neuen Array sammelt und dieses zurückgibt. 
function findeStrings(array) { 
  return array.filter(element => typeof element === 'string'); 
} 

// f) Erstelle ein Objekt person mit den Eigenschaften name, alter und einer Methode vorstellen, 
// die eine Begrüßungsnachricht in der Konsole ausgibt, die den Namen und das Alter der Person enthält.
const person = { 
  name: "Max Mustermann", 
  alter: 30, 
  vorstellen: function() { 
    console.log(`Hallo, mein Name ist ${this.name} und ich bin ${this.alter} Jahre alt.`); 
  } 
}; 

// g) Verwende eine for-in-Schleife, um alle Eigenschaften und Werte des Objekts person in der Konsole auszugeben.  
for (let eigenschaft in person) { 
  console.log(`${eigenschaft}: ${person[eigenschaft]}`); 
} 
 