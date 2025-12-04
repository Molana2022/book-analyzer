// Erstelle ein JavaScript-Programm, das folgende Anforderungen erfüllt: 

// a) Definiere eine Variable alter und weise ihr ein beliebiges Alter zu. 

// b) Verwende eine if-else-Struktur, um zu überprüfen, ob die Person volljährig ist. Gib eine entsprechende Nachricht in der Konsole aus. 

// c) Erstelle eine Schleife, die die Zahlen von 1 bis zum Wert der Variable alter ausgibt. Verwende dafür eine for-Schleife. 

// d) Nutze eine while-Schleife, um eine Variable countdown von 10 herunterzuzählen und bei jedem Schritt eine Nachricht in der Konsole auszugeben, bis der Countdown bei 0 ankommt. 

// e) Verwende den ternären Operator, um zu überprüfen, ob alter größer als 50 ist. Gib je nach Ergebnis eine unterschiedliche Nachricht in der Konsole aus. 

// f) Deklariere eine globale Variable name und weise ihr deinen Namen zu. Erstelle eine Funktion, die eine Begrüßungsnachricht mit diesem Namen in der Konsole ausgibt. 

// g) Definiere innerhalb einer Funktion eine lokale Variable lokaleVariable und gib ihren Wert in der Konsole aus. Rufe diese Funktion auf und beobachte, was passiert.  

const alter= 10;
if (alter>=18) console.log( ' bist volljährig.');
else console.log( 'Du bist nicht volljährig.');

for (let i = 1; i <= alter; i++) {
    console.log(i);
}
 




let j =10
while(j>0) {
    console.log(`das ist ${j} Wiederholung`);
    j--;
}
console.log("Der Countdown ist vorbei!"); 

const ergebnis= alter> 50 ? 'ja': 'nein';
console.log(ergebnis);



// -----
// f) Globale Variable `name` und Funktion zur Ausgabe 


let name1 = "Nasim";

const begruessung0 = () => {
    console.log(`Hallo ${name1}, willkommen beim JavaScript-Kurs.`);
};

begruessung0();



const begruessung = (name) => {
    console.log(`Hallo ${name}, willkommen beim JavaScript-Kurs.`);
};

begruessung("Max");
begruessung("Nasim");








