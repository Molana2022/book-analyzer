
// a) Definiere ein Objekt auto, das Eigenschaften für marke, modell, farbe, jahr und istVerkauft hat. Setze dabei istVerkauft zunächst auf false. 
// b) Füge dem Objekt eine Methode verkaufen hinzu, die den Wert von istVerkauft auf true setzt und eine Nachricht in der Konsole ausgibt, die besagt, dass das Auto nun verkauft ist. 
// c) Verwende eine if-else-Struktur, um zu prüfen, ob das Auto älter als 10 Jahre ist. Wenn ja, gib eine Nachricht aus, dass das Auto als Oldtimer betrachtet werden kann. 
// d) Erstelle eine Funktion autoInfo, die Informationen über das Auto in einem formatierten String zurückgibt (Marke, Modell, Farbe, Jahr). 
// e) Verwende eine for-in-Schleife, um alle Eigenschaften des auto-Objekts in der Konsole auszugeben. 
// f) Erstelle eine Arrow-Funktion updateFarbe, die als Parameter eine neue Farbe entgegennimmt und die Farbe des Autos aktualisiert.  
// g) Demonstriere die Verwendung von try-catch für einfaches Debugging, indem du versuchst, eine nicht existierende Methode des auto-Objekts aufzurufen und im Falle eines Fehlers eine entsprechende Nachricht in der Konsole auszugeben.  
const auto = { 
  marke: "Volkswagen", 
  modell: "Golf", 
  farbe: "Blau", 
  jahr: 2010, 
  istVerkauft: false, 
  verkaufen: function() { 
    this.istVerkauft = true; 
    console.log(`Das Auto ${this.marke} ${this.modell} ist nun verkauft.`); 
  } 
}; 


const aktuellesJahr = new Date().getFullYear(); 
if (aktuellesJahr - auto.jahr > 10) { 
  console.log("Das Auto kann als Oldtimer betrachtet werden."); 
} 
 

function autoInfo() { 
  return `Marke: ${auto.marke}, Modell: ${auto.modell}, Farbe: ${auto.farbe}, Jahr: ${auto.jahr}`; 
} 
console.log(autoInfo());


for (const eigenschaft in auto) { 
  console.log(`${eigenschaft}: ${auto[eigenschaft]}`); 
} 


const updateFarbe = neueFarbe => { 
  auto.farbe = neueFarbe; 
  console.log(`Die Farbe des Autos wurde zu ${neueFarbe} aktualisiert.`); 
}; 
updateFarbe("Rot"); 

// g) Demonstration von try-catch 

try { 
  auto.nichtExistierendeMethode(); 
} catch (error) { 
  console.log("Ein Fehler ist aufgetreten: ", error.message); 
} 