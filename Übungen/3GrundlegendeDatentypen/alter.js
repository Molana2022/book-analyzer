// Variablen definieren und Werte anzeigen 
let alter= 30;
const name='Max';
console.log("Ich bin "+ name+ " und "+alter+ " Jahre alt.")
console.log("Ich bin " + name + " und in 5 Jahren " + (parseInt(alter)+5) + " Jahre alt.")

// Überprüfung auf undefined 
let besucher; 
if (typeof besucher === "undefined") { 
  besucher = "Neuer Besucher"; 
} 
console.log(besucher);  
 
// Variable loginVersuche 
let loginVersuche = null; 
loginVersuche = (loginVersuche || 0) + 1;  
console.log('Login-Versuch: ' + loginVersuche); 

// Überprüfung, ob ein String leer ist 
let leerString = ""; 
if (leerString.length === 0) { 
  console.log("String ist leer"); 
} else { 
  console.log(leerString); 
} 

// Konvertierung von String zu Number 
let zahlString = "1234.56"; 
let ganzeZahl = parseInt(zahlString); 
let gleitKommaZahl = parseFloat(zahlString); 
console.log(ganzeZahl); 
console.log(gleitKommaZahl); 












