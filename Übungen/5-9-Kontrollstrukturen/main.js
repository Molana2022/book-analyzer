const alter= 41;
if (alter>= 18) {
    console.log('Du bist volljährig.');
}
else {
    console.log('Du bist noch nicht volljährig.')
}
    



for(i=1; i <= 10; i++) {
    console.log(`${i}*2: ${i*2}`);
} 



let farben=["Rot", "Grün", "Blau"];
let index=0;
while(index < farben.length) {
    console.log(farben[index]);
    index++;
}



let ergebnis = 7 > 5 ? "Ja, 7 ist größer als 5" : "Nein, 7 ist nicht größer als 5"; 
console.log(ergebnis); 



let wochentag = "Samstag"; 
switch (wochentag) { 
    case "Montag": 
    case "Dienstag": 
    case "Mittwoch": 
    case "Donnerstag": 
    case "Freitag": 
        console.log(`${wochentag} ist ein Werktag.`); 
        break; 
    case "Samstag": 
    case "Sonntag": 
        console.log(`${wochentag} ist eine Wochenende.`); 
        break; 
    default: 
        console.log("Das ist kein gültiger Wochentag."); 
} 
 